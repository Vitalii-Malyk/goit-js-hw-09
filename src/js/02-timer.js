import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtnEl = document.querySelector('[data-start]');
startBtnEl.disabled = true;

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

const fp = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
    }
    startBtnEl.disabled = false;
  },
});

startBtnEl.addEventListener('click', startTimer);

function startTimer() {
  setInterval(() => {
    function convertMs(ms) {
      ms = fp.selectedDates[0].getTime();
      // Number of milliseconds per unit of time
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      // Remaining days
      const days = Math.floor(ms / day);
      // Remaining hours
      const hours = Math.floor((ms % day) / hour);
      // Remaining minutes
      const minutes = Math.floor(((ms % day) % hour) / minute);
      // Remaining seconds
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);

      return { days, hours, minutes, seconds };
    }
    console.log(convertMs());

    days.textContent = fp.selectedDates[0].getDate() - new Date().getDate();
    hours.textContent = fp.selectedDates[0].getHours() - new Date().getHours();
    minutes.textContent =
      fp.selectedDates[0].getMinutes() - new Date().getMinutes();
    seconds.textContent =
      fp.selectedDates[0].getSeconds() - new Date().getSeconds();
  }, 1000);
}
