const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  //O segundo parâmetro myObject define o tipo de request method: 'GET' e o formato da resposta headers: { 'Accept': 'application/json' } , como visto nas requisições via curl .
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      let h2 = document.querySelector('#jokeContainer');
      h2.innerText = data.joke;
    });
};

window.onload = () => fetchJoke();
