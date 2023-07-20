const formEl = document.querySelector('.form');
const delayInputEl = document.querySelector('[name="delay"]');
const stepInputEl = document.querySelector('[name="step"]');
const amountInputEl = document.querySelector('[name="amount"]');

console.log(delayInputEl);

const createPromise = new Promise((position, delay) => {
  setTimeout(() => {
    if (formEl) {
      resolve('Success! Value passed to resolve function');
    } else {
      reject('Error! Error passed to reject function');
    }
  }, 2000);
});

createPromise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  });

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// formEl.addEventListener('submit', createPromise(position, delay));
