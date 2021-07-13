const myRemove = require('./Iex2')

let array = [1,2,3,4]
let NewArray = myRemove(array, 4)

describe('IEx2', () => {
it('A função remove 3 da array', ()=>{
  expect([1,2,4]).toEqual(myRemove([1, 2, 3, 4], 3))
})
it('A função remove exatamente o  3 da array', ()=>{
  expect([1,2,3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3))
})
it('A array original não muda', ()=>{
  expect(array).not.toEqual(NewArray)
})
it('A função nao remove se não tiver o numero', ()=>{
  expect([1,2,3, 4]).toEqual(myRemove([1, 2, 3, 4], 5))
})
})