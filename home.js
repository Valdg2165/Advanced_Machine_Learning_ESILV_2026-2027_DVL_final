(() => {
  const selectors = [...document.querySelectorAll("[data-journey]")];
  const panels = [...document.querySelectorAll("[data-panel]")];
  if (!selectors.length || !panels.length) return;

  const selectJourney = (journey, focus = false) => {
    const selected = selectors.find((button) => button.dataset.journey === journey);
    if (!selected) return;

    selectors.forEach((button) => {
      const active = button === selected;
      button.setAttribute("aria-pressed", String(active));
    });

    panels.forEach((panel) => {
      panel.hidden = panel.dataset.panel !== journey;
    });

    if (focus) selected.focus();
  };

  selectors.forEach((button) => {
    button.addEventListener("click", () => selectJourney(button.dataset.journey));
  });

  selectJourney("time-series");
})();
