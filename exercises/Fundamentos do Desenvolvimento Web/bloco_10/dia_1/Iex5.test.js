
const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('IEx5', ()=>{
  it('Objetos iguais', ()=>{
    expect(obj1).toEqual(obj2)
  })
  it('Objetos 2 e 3 diferentes', ()=>{
    expect(obj2).not.toEqual(obj3)
  })
  it('Objetos 1 e 3 diferentes', ()=>{
    expect(obj1).not.toEqual(obj3)
  })
})