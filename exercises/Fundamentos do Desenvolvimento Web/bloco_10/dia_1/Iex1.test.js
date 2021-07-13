const sum = require('./Iex1')

describe('Iex1', ()=>{
  it('A soma de 4 com 5 é 9', ()=>{
    expect(9).toEqual(sum(4, 5))
  })
  it('A soma de 0 com 0 é 0', ()=>{
    expect(0).toEqual(sum(0,0))
  })
  it('Joga erro quando lança string', ()=> {
   expect(()=> {sum('0', 0)}).toThrowError(new Error('parameters must be numbers'))
  })
})