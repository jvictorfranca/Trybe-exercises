const encodeDecode = require('./IIex1')

let string = 'test string'

describe('IIex2: Encode Decode', ()=>{
  it('testa se encode é função', ()=>{
    expect('function').toEqual(typeof encodeDecode.encode)
  })
  it('testa se decode é função', ()=>{
    expect('function').toEqual(typeof encodeDecode.decode)
  })
  it('testa encode codifica as vogais', ()=>{
    expect('12345').toEqual(encodeDecode.encode('aeiou'))
  })
  it('testa decode decodifica os numeros', ()=>{
    expect('aeiou').toEqual(encodeDecode.decode('12345'))
  })
  it('testa encode codifica apenas as vogais', ()=>{
    expect('123dds45').toEqual(encodeDecode.encode('aeiddsou'))
  })
  it('testa decode decodifica apenas as vogais', ()=>{
    expect('aeiddsou').toEqual(encodeDecode.decode('123dds45'))
  })
  it('testa o length das strings', ()=>{
    expect(string.length).toEqual(encodeDecode.encode(string).length)
  })
  
})