let random = () =>{
  return Math.floor(Math.random()*101)
}


test('ex1: testando random', ()=>{
  random = jest.fn().mockReturnValue(10)
  expect(random()).toEqual(10)
  expect(random).toHaveBeenCalled()
  expect(random).toHaveBeenCalledTimes(1)

})

test('ex2: testando implementation', ()=>{
  random = jest.fn().mockImplementationOnce((a,b)=> a/b)
  expect(random(10,2)).toBe(5)
  expect(random).toHaveBeenCalledTimes(1)
  expect(random).toHaveBeenLastCalledWith(10,2)
})


test('ex3: nova implementação', ()=>{
  random = jest.fn().mockImplementation((a,b, c)=> a*b*c)
  expect(random(2,3,4)).toEqual(24)
  expect(random).toBeCalled()
  expect(random).toHaveBeenCalledTimes(1)
  random.mockReset()
  random = jest.fn().mockImplementation((a)=> a*2)
  expect(random(2)).toEqual(4)
  expect(random(7)).toEqual(14)
  expect(random).toBeCalledTimes(2)
})
