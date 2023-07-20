import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener(`submit`, onStart);

function createPromise(position, delay) {
  return new Promise((resolve, rejected) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      rejected({ position, delay });
    }, delay);
  });
}
