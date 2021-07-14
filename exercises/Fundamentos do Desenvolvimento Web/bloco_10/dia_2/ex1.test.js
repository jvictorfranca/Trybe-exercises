const uppercase = require('./ex1')


test('Testando a uppercase', (done) =>{
  uppercase('hello', (result)=>{
    expect(result).toBe('HELLO');
    done()
  })
})