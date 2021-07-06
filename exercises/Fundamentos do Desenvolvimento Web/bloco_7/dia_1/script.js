let counter = 0;
document.querySelector('#button').addEventListener('click', () => {
  counter += 1;
  document.querySelector('#counter').innerHTML = counter;
});
