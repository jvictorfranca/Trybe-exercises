const funcs = require('./ex4')
// jest.mock('./ex4')

test('testa uppercase com spyOn', ()=>{
  const spy = jest.spyOn(funcs, 'uppercase')
  .mockImplementation((a)=>a.toLowerCase())
  expect(spy('oOi')).toBe('ooi')
  expect(spy).toHaveBeenCalled()
  expect(spy).toBeCalledTimes(1)
  expect(spy).toHaveBeenLastCalledWith('oOi')
  funcs.uppercase.mockRestore()
  expect(funcs.uppercase('hello')).toEqual('HELLO')
})
