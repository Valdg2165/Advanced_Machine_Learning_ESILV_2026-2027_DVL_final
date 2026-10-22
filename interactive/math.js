/* Small, inspectable teaching calculations. No assessed training loop. */
(function (root) {
  'use strict';
  function finite(value, label) {
    if (!Number.isFinite(value)) throw new Error(label + ' must be finite');
    return value;
  }
  function seasonal(history, horizon, period = 7) {
    if (!Number.isInteger(period) || period < 1 || history.length < period || !Number.isInteger(horizon) || horizon < 1) throw new Error('Invalid seasonal forecast contract');
    history.forEach(value => finite(value, 'Observation'));
    return Array.from({length: horizon}, (_, i) => history[history.length - period + i % period]);
  }
  function qUpdate(q, reward, gamma, next, alpha, terminated) {
    [q, reward, gamma, next, alpha].forEach(v => finite(v, 'Q-update input'));
    if (gamma < 0 || gamma > 1 || alpha < 0 || alpha > 1) throw new Error('Rates must lie in [0,1]');
    const target = reward + (terminated ? 0 : gamma * next);
    return {target, error: target - q, updated: q + alpha * (target - q)};
  }
  function inventoryStep(stock, order, demand) {
    if (![stock, order, demand].every(Number.isInteger) || stock < 0 || stock > 8 || order < 0 || order > 2 || demand < 0 || demand > 3) throw new Error('Invalid inventory input');
    const available = Math.min(8, stock + order);
    const served = Math.min(available, demand);
    const nextStock = available - served;
    const unmet = demand - served;
    const orderCost = 0.45 * order;
    const holdingCost = 0.30 * nextStock;
    const shortageCost = 3 * unmet;
    const cost = orderCost + holdingCost + shortageCost;
    return {stock, order, demand, available, served, nextStock, unmet, orderCost, holdingCost, shortageCost, cost, reward: -cost};
  }
  function rng(seed) {
    let state = seed >>> 0;
    return () => { state = (Math.imul(1664525, state) + 1013904223) >>> 0; return state / 4294967296; };
  }
  function demandFromUniform(regime, u) {
    if (![0,1].includes(regime) || !Number.isFinite(u) || u < 0 || u >= 1) throw new Error('Invalid demand draw');
    return regime === 0 ? (u < .25 ? 0 : u < .85 ? 1 : 2) : (u < .15 ? 1 : u < .70 ? 2 : 3);
  }
  function nextRegime(regime, u) {
    if (![0,1].includes(regime) || !Number.isFinite(u) || u < 0 || u >= 1) throw new Error('Invalid regime draw');
    return u < (regime === 0 ? .85 : .20) ? 0 : 1;
  }
  function epsilonProbabilities(epsilon, actions = 3, greedy = 1) {
    if (!Number.isFinite(epsilon) || epsilon < 0 || epsilon > 1 || !Number.isInteger(actions) || actions < 1 || !Number.isInteger(greedy) || greedy < 0 || greedy >= actions) throw new Error('Invalid exploration input');
    return Array.from({length: actions}, (_, i) => epsilon / actions + (i === greedy ? 1 - epsilon : 0));
  }
  function mean(values) { if (!values.length) throw new Error('Empty sample'); values.forEach(v => finite(v, 'Observation')); return values.reduce((a,b)=>a+b,0) / values.length; }
  function mae(actual, predicted) { if (!actual.length || actual.length !== predicted.length) throw new Error('Unpaired arrays'); return mean(actual.map((v,i)=>Math.abs(v-predicted[i]))); }
  function intervalEvidence(actual, centers, width) {
    if (!Number.isFinite(width) || width < 0 || actual.length !== centers.length || !actual.length) throw new Error('Invalid intervals');
    actual.concat(centers).forEach(v => finite(v, 'Interval observation'));
    const covered = actual.filter((value,i) => value >= centers[i]-width && value <= centers[i]+width).length;
    return {covered, n:actual.length, coverage:covered/actual.length, meanWidth:2*width};
  }
  function pairedFive(a, b) {
    if (a.length !== 5 || b.length !== 5) throw new Error('This teaching fixture requires five pairs');
    const differences = a.map((v,i)=>finite(v-b[i], 'Paired difference'));
    const estimate = mean(differences);
    const sd = Math.sqrt(differences.reduce((sum,v)=>sum+(v-estimate)**2,0)/4);
    const half = 2.7764451051977987 * sd / Math.sqrt(5);
    return {differences, mean:estimate, low:estimate-half, high:estimate+half};
  }
  const api = {seasonal,qUpdate,inventoryStep,rng,demandFromUniform,nextRegime,epsilonProbabilities,mean,mae,intervalEvidence,pairedFive};
  root.CourseMath = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
