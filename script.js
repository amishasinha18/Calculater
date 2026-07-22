const display = document.getElementById('display');
const history = document.getElementById('history');
const historyList = document.getElementById('historyList');
const HISTORY_KEY = 'calcHistory';
let angleMode = 'deg';

function append(val) {
  const text = display.value;
  if (text === '0' || text === 'Error') {
    if (val === '.' || isOperator(val)) return;
    display.value = val;
  } else {
    if (val === '.' && lastNumberHasDot()) return;
    if (isOperator(val) && isOperator(text.slice(-1))) return;
    display.value += val;
  }
}

function sanitize(expr) {
  return expr.replace(/\^/g, '**').replace(/π/g, '(Math.PI)').replace(/e/g, '(Math.E)');
}

function calculate() {
  try {
    const expr = display.value;
    const result = formatResult(eval(sanitize(expr)));
    if (isNaN(result) || !isFinite(result)) throw "Invalid";
    history.innerText = expr;
    display.value = result;
    saveHistory(expr, result);
  } catch {
    display.value = 'Error';
  }
}

function formatResult(n) {
  return Math.round(n * 1e10) / 1e10;
}

function percent() {
  const text = display.value;
  if (text === '0' || text === 'Error') return;
  const parts = text.split(/([+\-*/^])/);
  const lastNum = parseFloat(parts.at(-1));
  if (isNaN(lastNum)) return;
  parts[parts.length - 1] = formatResult(lastNum / 100).toString();
  display.value = parts.join('');
}

function toRad(x) { return angleMode === 'deg' ? x * Math.PI / 180 : x; }
function fromRad(x) { return angleMode === 'deg' ? x * 180 / Math.PI : x; }

function factorial(n) {
  if (!Number.isInteger(n) || n < 0 || n > 170) throw "Invalid";
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

function unaryOp(fn, formatLabel) {
  try {
    const expr = display.value;
    const value = eval(sanitize(expr));
    const result = formatResult(fn(value));
    if (isNaN(result) || !isFinite(result)) throw "Invalid";
    const exprLabel = formatLabel(expr);
    history.innerText = exprLabel;
    display.value = result;
    saveHistory(exprLabel, result);
  } catch {
    display.value = 'Error';
  }
}

function unarySqrt()    { unaryOp(Math.sqrt, e => `√(${e})`); }
function unarySquare()  { unaryOp(x => x * x, e => `(${e})²`); }
function unaryRecip()   { unaryOp(x => 1 / x, e => `1/(${e})`); }
function unaryFactorial() { unaryOp(factorial, e => `(${e})!`); }
function unarySin()     { unaryOp(x => Math.sin(toRad(x)), e => `sin(${e})`); }
function unaryCos()     { unaryOp(x => Math.cos(toRad(x)), e => `cos(${e})`); }
function unaryTan()     { unaryOp(x => Math.tan(toRad(x)), e => `tan(${e})`); }
function unaryAsin()    { unaryOp(x => fromRad(Math.asin(x)), e => `asin(${e})`); }
function unaryAcos()    { unaryOp(x => fromRad(Math.acos(x)), e => `acos(${e})`); }
function unaryAtan()    { unaryOp(x => fromRad(Math.atan(x)), e => `atan(${e})`); }
function unaryLog()     { unaryOp(Math.log10, e => `log(${e})`); }
function unaryLn()      { unaryOp(Math.log, e => `ln(${e})`); }

function appendConstant(symbol) {
  const text = display.value;
  if (text === '0' || text === 'Error') { display.value = symbol; return; }
  const last = text.slice(-1);
  const needsMultiply = /[0-9)πe]/.test(last);
  display.value = text + (needsMultiply ? '*' : '') + symbol;
}

function insertParen() {
  const text = display.value;
  if (text === 'Error') { display.value = '('; return; }
  const open = (text.match(/\(/g) || []).length;
  const close = (text.match(/\)/g) || []).length;
  const last = text.slice(-1);
  if (open === close) {
    const needsMultiply = text !== '0' && /[0-9)πe]/.test(last);
    display.value = (text === '0' ? '' : text) + (needsMultiply ? '*(' : '(');
  } else {
    if (isOperator(last) || last === '(') return;
    display.value = text + ')';
  }
}

function setMode(mode) {
  const card = document.getElementById('calculatorCard');
  const drawer = document.getElementById('sciDrawer');
  const thumb = document.getElementById('modeThumb');
  const normalBtn = document.getElementById('modeNormalBtn');
  const sciBtn = document.getElementById('modeSciBtn');
  const isSci = mode === 'scientific';

  card.classList.toggle('max-w-sm', !isSci);
  card.classList.toggle('max-w-[460px]', isSci);

  drawer.classList.toggle('grid-rows-[0fr]', !isSci);
  drawer.classList.toggle('opacity-0', !isSci);
  drawer.classList.toggle('grid-rows-[1fr]', isSci);
  drawer.classList.toggle('opacity-100', isSci);

  thumb.classList.toggle('translate-x-full', isSci);

  normalBtn.classList.toggle('text-slate-950', !isSci);
  normalBtn.classList.toggle('text-slate-400', isSci);
  normalBtn.setAttribute('aria-selected', String(!isSci));

  sciBtn.classList.toggle('text-slate-950', isSci);
  sciBtn.classList.toggle('text-slate-400', !isSci);
  sciBtn.setAttribute('aria-selected', String(isSci));
}

function setAngleMode(mode) {
  angleMode = mode;
  const isRad = mode === 'rad';
  document.getElementById('angleThumb').classList.toggle('translate-x-full', isRad);
  document.getElementById('degBtn').classList.toggle('text-slate-950', !isRad);
  document.getElementById('degBtn').classList.toggle('text-slate-400', isRad);
  document.getElementById('radBtn').classList.toggle('text-slate-950', isRad);
  document.getElementById('radBtn').classList.toggle('text-slate-400', !isRad);
}

function toggleHistoryPanel() {
  const panel = document.getElementById('historyPanel');
  const chevron = document.getElementById('historyChevron');
  const isOpen = panel.classList.contains('max-h-64');
  panel.classList.toggle('max-h-0', isOpen);
  panel.classList.toggle('opacity-0', isOpen);
  panel.classList.toggle('max-h-64', !isOpen);
  panel.classList.toggle('opacity-100', !isOpen);
  chevron.classList.toggle('rotate-180', !isOpen);
}

function copyValue(text, targetEl) {
  navigator.clipboard.writeText(String(text)).then(() => showCopiedTooltip(targetEl)).catch(() => {});
}

function showCopiedTooltip(targetEl) {
  const rect = targetEl.getBoundingClientRect();
  const tip = document.createElement('div');
  tip.textContent = 'Copied!';
  tip.className = 'fixed z-50 -translate-x-1/2 bg-sky-400 text-slate-950 text-xs font-semibold px-2 py-1 rounded-md shadow-lg pointer-events-none opacity-0 transition-opacity duration-200';
  tip.style.left = `${rect.left + rect.width / 2}px`;
  tip.style.top = `${rect.top - 32}px`;
  document.body.appendChild(tip);
  requestAnimationFrame(() => tip.classList.remove('opacity-0'));
  setTimeout(() => {
    tip.classList.add('opacity-0');
    setTimeout(() => tip.remove(), 200);
  }, 700);
}

function clearDisplay() {
  display.value = '0';
  history.innerText = '';
}

function backspace() {
  const text = display.value;
  display.value = text.length > 1 ? text.slice(0, -1) : '0';
}

function isOperator(c) {
  return ['+', '-', '*', '/', '^'].includes(c);
}

function lastNumberHasDot() {
  const parts = display.value.split(/[\+\-\*\/\^]/);
  return parts.at(-1).includes('.');
}

document.addEventListener('keydown', e => {
  const key = e.key;
  if ("0123456789+-*/.^()".includes(key)) {
    if (key === '(' || key === ')') { insertParen(); flashById('sciParenKey'); return; }
    append(key);
    key === '^' ? flashById('btnPower') : highlightKey(key);
  }
  else if (key === '%') {
    percent();
    highlightKey('%');
  }
  else if (key === 'Enter') {
    calculate();
    highlightKey('=');
  }
  else if (key === 'Backspace') {
    backspace();
    highlightKey('DEL');
  }
  else if (key.toLowerCase() === 'c') {
    clearDisplay();
    highlightKey('AC');
  }
});

function highlightKey(keyLabel) {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    if (btn.innerText === keyLabel) {
      btn.classList.add('scale-95', 'ring-2', 'ring-sky-300');
      setTimeout(() => btn.classList.remove('scale-95', 'ring-2', 'ring-sky-300'), 150);
    }
  });
}

function flashById(id) {
  const btn = document.getElementById(id);
  if (!btn) return;
  btn.classList.add('scale-95', 'ring-2', 'ring-sky-300');
  setTimeout(() => btn.classList.remove('scale-95', 'ring-2', 'ring-sky-300'), 150);
}

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  } catch {
    return [];
  }
}

function saveHistory(expr, result) {
  const entries = loadHistory();
  entries.unshift({ expr, result });
  localStorage.setItem(HISTORY_KEY, JSON.stringify(entries.slice(0, 50)));
  renderHistory();
}

function clearHistory() {
  localStorage.removeItem(HISTORY_KEY);
  renderHistory();
}

function renderHistory() {
  const entries = loadHistory();
  historyList.innerHTML = '';
  if (entries.length === 0) {
    historyList.innerHTML = '<div class="text-slate-500 text-xs italic">No history yet</div>';
    return;
  }
  entries.forEach(({ expr, result }) => {
    const row = document.createElement('div');
    row.className = 'flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg px-3 py-1.5 text-slate-300 cursor-pointer transition-colors';
    row.title = 'Click to copy result';
    row.innerHTML = `<span class="text-slate-400 truncate mr-2 font-mono">${expr}</span><span class="font-semibold text-sky-400 font-mono">${result}</span>`;
    row.addEventListener('click', () => copyValue(result, row));
    historyList.appendChild(row);
  });
}

renderHistory();
