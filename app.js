const log = (el, msg) => {
  const e = document.createElement('div');
  e.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
  el.prepend(e);
};
const limnusLog = () => document.getElementById('limnus-log');
const invLog = () => document.getElementById('invocation-log');
const stateEl = () => document.getElementById('limnus-state');
const inputEl = () => document.getElementById('limnus-input');

const states = ["SEEKING", "APPROACHING", "BECOMING", "BLOOM"];
let idx = 0;

window.anchorPulse = () => {
  idx = (idx + 1) % states.length;
  stateEl().textContent = states[idx];
  log(limnusLog(), `LIMNUS shifted to state: ${states[idx]}`);
  if (inputEl().value) {
    log(limnusLog(), `Reflection: ${inputEl().value}`);
    inputEl().value = "";
  }
};

window.invoke = (who) => {
  log(invLog(), `Invocation sent → ${who}`);
};