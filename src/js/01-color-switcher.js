const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startBtnEl.addEventListener('click', () => {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    startBtnEl.disabled = true;
  }, 1000);
});

stopBtnEl.addEventListener('click', () => {
  clearInterval(timerId);
  startBtnEl.disabled = false;
});
console.log('222');
