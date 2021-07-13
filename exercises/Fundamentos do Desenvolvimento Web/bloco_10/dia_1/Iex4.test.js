const myFizzBuzz =  require('./Iex4')

describe('Iex4', ()=>{
  it('Divisivel por 3 e por 5', () => {
    expect('fizzbuzz').toEqual(myFizzBuzz(15))
  })
  it('Divisivel por 3 ', () => {
    expect('fizz').toEqual(myFizzBuzz(3))
  })
  it('Divisivel por 5', () => {
    expect('buzz').toEqual(myFizzBuzz(5))
  })
  it('Não é número', () => {
    expect(false).toEqual(myFizzBuzz('alou'))
  })
})