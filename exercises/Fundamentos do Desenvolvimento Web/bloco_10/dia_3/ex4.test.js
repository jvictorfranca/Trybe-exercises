const funcs = require('./ex4')
jest.mock('./ex4')

//OBS: Pode-se fazer uma constante ao invez de utilizar funcs.uppercase, como const uppercase, ou const qualquerCoisa, evitando mudar o objeto inicial.

test('primeira caixa baixa', ()=>{
  funcs.uppercase = funcs.uppercase.mockImplementation(a => a.toLowerCase())
  expect(funcs.uppercase('oOi')).toBe('ooi')
  expect(funcs.uppercase).toHaveBeenCalled()
  expect(funcs.uppercase).toBeCalledTimes(1)
  expect(funcs.uppercase).toHaveBeenLastCalledWith('oOi')
})

test('ultima ultima letra', ()=>{
  funcs.onlyFirst = funcs.onlyFirst.mockImplementation(a => a[a.length-1])
  expect(funcs.onlyFirst('hello')).toEqual('o')
  expect(funcs.onlyFirst).toHaveBeenCalled()
  expect(funcs.onlyFirst).toHaveBeenCalledTimes(1)
  expect(funcs.onlyFirst).toHaveBeenLastCalledWith('hello')
})

test('terceira 3 strings', ()=>{
  funcs.concatenate = funcs.concatenate.mockImplementation((a,b,c)=> `${a}${b}${c}`)
  expect(funcs.concatenate('oi ', 'joao ', 'baum')).toEqual('oi joao baum')
  expect(funcs.concatenate).toHaveBeenCalled()
  expect(funcs.concatenate).toHaveBeenCalledTimes(1)
  expect(funcs.concatenate).toHaveBeenCalledWith('oi ', 'joao ', 'baum')
})

test('ex5', ()=>{
  funcs.uppercase.mockReset()
  funcs.uppercase = jest.spyOn(funcs, "uppercase")
  // .mockImplementation((a)=>a.toLowerCase())
  // expect(funcs.uppercase('oOi')).toBe('ooi')
  // expect(funcs.uppercase).toHaveBeenCalled()
  // expect(funcs.uppercase).toBeCalledTimes(1)
  // expect(funcs.uppercase).toHaveBeenLastCalledWith('oOi')
  // funcs.uppercase.mockRestore()
  expect(funcs.uppercase('hello')).toBe('HELLO')
})

