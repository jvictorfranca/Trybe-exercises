function testPromise() {
  const myPromise = new Promise((resolve, reject) => {
    let array = [];
    for (let index = 0; index < 10; index += 1) {
      let number = Math.floor(Math.random() * 50) + 1;
      number = number ** 2;
      array.push(number);
    }
    let sum = array.reduce((acum, curr) => acum + curr);
    if (sum < 8000) {
      resolve(sum);
    } else {
      reject();
    }
  });
  myPromise
    .then((sum) => {
      let array = [];
      array.push(sum / 2);
      array.push(sum / 3);
      array.push(sum / 5);
      array.push(sum / 10);
      console.log(array);
      return array;
    })
    .then((array) => console.log(array.reduce((sum, numb) => sum + numb)))
    .catch(() =>
      console.log('É mais de oito mil! Essa promise deve estar quebrada!')
    );
}

testPromise();
