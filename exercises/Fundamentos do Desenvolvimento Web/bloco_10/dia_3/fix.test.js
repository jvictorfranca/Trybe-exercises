const funcs = require('./fix.js')


test('#sub', ()=>{
  funcs.subtrair = jest.fn()
  funcs.subtrair()
  expect(funcs.subtrair).toHaveBeenCalled()
})

test('#mult', ()=>{
  funcs.multiplicar = jest.fn().mockReturnValue(10)
  funcs.multiplicar()
  expect(funcs.multiplicar).toHaveBeenCalled()
  expect(funcs.multiplicar()).toBe(10)
})

test('#sumFUNCTION', ()=>{
  const mockSum = jest.spyOn(funcs, 'somar')
  mockSum.mockResolvedValue(5);

  mockSum(2,3);
  expect(mockSum).toHaveBeenCalled
  expect(mockSum).toHaveBeenCalledTimes(1)
  expect(mockSum).toHaveBeenCalledWith(2,3)
  expect(mockSum(2,3)).resolves.toBe(5)

})

test('#dividir', () => {
  const mockDividir = jest.spyOn(funcs, "dividir");
  mockDividir.mockReturnValue(15);
  mockDividir.mockReturnValueOnce(2);
  mockDividir.mockReturnValueOnce(5);

  expect(mockDividir(4, 2)).toBe(2);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(1);
  expect(mockDividir).toHaveBeenCalledWith(4, 2);

  expect(mockDividir(10, 2)).toBe(5);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(2);
  expect(mockDividir).toHaveBeenCalledWith(10, 2);

  expect(mockDividir(30, 2)).toBe(15);
  expect(mockDividir).toHaveBeenCalled();
  expect(mockDividir).toHaveBeenCalledTimes(3);
  expect(mockDividir).toHaveBeenCalledWith(30, 2);
});

test('#sub', () => {
  const mockSubtrair = jest.spyOn(funcs, "subtrair");
  mockSubtrair.mockImplementation((a, b) => a * b);
  mockSubtrair.mockReturnValue(20);

  expect(mockSubtrair(10, 2)).toBe(20);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(2);
  expect(mockSubtrair).toHaveBeenCalledWith(10, 2);

  mockSubtrair.mockRestore();
  mockSubtrair.mockReturnValue(8);

  expect(mockSubtrair(10, 2)).toBe(8);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
});