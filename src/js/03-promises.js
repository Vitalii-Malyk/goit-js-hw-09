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

function onStart(event) {
  event.preventDefault();

  let delay = Number(form.elements.delay.value);
  let amount = Number(form.elements.amount.value);
  let step = Number(form.elements.step.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) =>
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        )
      )
      .catch(({ position, delay }) =>
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      )
      .finally((delay += step));
  }
}
