(function () {
  'use strict';
  const chapters=[...document.querySelectorAll('.chapter')];
  const nav=[...document.querySelectorAll('.nav-link')];
  const key='esilv-operations-decisions-r2-notes';
  let current='welcome',state={notes:{},read:[]},storage=true;
  try {const parsed=JSON.parse(localStorage.getItem(key)||'null');if(parsed && parsed.notes && Array.isArray(parsed.read))state=parsed;} catch {storage=false;}
  const message=document.getElementById('storage-status');
  function save(){try{localStorage.setItem(key,JSON.stringify(state));message.textContent='Saved on this device. Download a copy if you change browsers.';}catch{storage=false;message.textContent='Browser storage is unavailable. Keep this tab open and download your notes.';}}
  function activate(){let id;try{id=decodeURIComponent(location.hash.slice(1))||'welcome';}catch{id=current;}if(id==='reading'){document.getElementById('reading').focus();return;}const target=chapters.find(c=>c.id===id)||chapters[0];current=target.id;chapters.forEach(c=>c.classList.toggle('current',c===target));nav.forEach(a=>{if(a.hash==='#'+current)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});document.title=`${target.dataset.title} · Operations & Decisions`;const index=chapters.indexOf(target);const previous=document.getElementById('previous-chapter'),next=document.getElementById('next-chapter');previous.href='#'+chapters[Math.max(0,index-1)].id;previous.textContent=index===0?'Start of the book':'← Previous chapter';next.href='#'+chapters[Math.min(chapters.length-1,index+1)].id;next.textContent=index===chapters.length-1?'End of the reading room':'Next chapter →';document.getElementById('chapter-position').textContent=current==='library'?'READING ROOM':`${String(index+1).padStart(2,'0')} / 12`;document.getElementById('chapter-notes').value=state.notes[current]||'';document.body.classList.remove('menu-open');document.getElementById('menu-toggle').setAttribute('aria-expanded','false');window.scrollTo(0,0);updateReadButtons();}
  function updateReadButtons(){document.querySelectorAll('.read-mark').forEach(b=>{const seen=state.read.includes(b.dataset.chapter);b.setAttribute('aria-pressed',String(seen));b.textContent=seen?'Read ✓':'Mark as read';});}
  document.querySelectorAll('.read-mark').forEach(b=>b.addEventListener('click',()=>{const id=b.dataset.chapter;state.read=state.read.includes(id)?state.read.filter(v=>v!==id):[...state.read,id];save();updateReadButtons();}));
  document.getElementById('chapter-search').addEventListener('input',event=>{const query=event.target.value.trim().toLowerCase();let matches=0;nav.forEach(a=>{a.hidden=!a.dataset.search.includes(query);if(!a.hidden)matches++;});document.getElementById('search-status').textContent=query?`${matches} chapter${matches===1?'':'s'} found`:'';});
  document.getElementById('focus-toggle').addEventListener('click',event=>{const enabled=document.body.classList.toggle('focus-mode');event.currentTarget.setAttribute('aria-pressed',String(enabled));});
  document.getElementById('menu-toggle').addEventListener('click',event=>{const enabled=document.body.classList.toggle('menu-open');event.currentTarget.setAttribute('aria-expanded',String(enabled));});
  const notebook=document.getElementById('notebook'),notesToggle=document.getElementById('notes-toggle');
  function closeNotes(){notebook.hidden=true;notesToggle.setAttribute('aria-expanded','false');notesToggle.focus();}
  notesToggle.addEventListener('click',()=>{notebook.hidden=!notebook.hidden;notesToggle.setAttribute('aria-expanded',String(!notebook.hidden));if(!notebook.hidden)document.getElementById('chapter-notes').focus();});
  document.getElementById('notes-close').addEventListener('click',closeNotes);
  document.getElementById('chapter-notes').addEventListener('input',event=>{state.notes[current]=event.target.value;save();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!notebook.hidden)closeNotes();});
  document.getElementById('export-notes').addEventListener('click',()=>{const text=['# My Operations & Decisions notes','',...chapters.flatMap(c=>state.notes[c.id]?[`## ${c.dataset.title}`,'',state.notes[c.id],'']:[])].join('\n');const url=URL.createObjectURL(new Blob([text],{type:'text/markdown;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download='my-operations-decisions-notes.md';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
  let previouslyClosed=[];
  window.addEventListener('beforeprint',()=>{previouslyClosed=[...document.querySelectorAll('details:not([open])')];previouslyClosed.forEach(d=>d.open=true);document.documentElement.classList.add('printing');});
  window.addEventListener('afterprint',()=>{previouslyClosed.forEach(d=>d.open=false);document.documentElement.classList.remove('printing');});
  document.getElementById('print-book').addEventListener('click',()=>window.print());
  message.textContent=storage?'Notes are stored only in this browser.':'Browser storage is unavailable. You can still download notes.';
  window.addEventListener('hashchange',activate);document.documentElement.classList.add('js');activate();
})();
