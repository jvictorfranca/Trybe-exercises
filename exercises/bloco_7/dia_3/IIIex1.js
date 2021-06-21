const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let fullGreetings = [];
  for (let person in people) {
    fullGreetings.push(greeting + people[person]);
  }
  return fullGreetings;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);
