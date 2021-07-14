const { getUserName } = require('./ex2-3')

test('if works with autocomplete for 5',async ()=>{
  const person = await getUserName(4)
  expect(person).toEqual('Mark')
})

test('testing the error with async', async()=>{
  try{
    await getUserName(9)
  }catch (error) {
    expect(error).toEqual({ error: 'User with 9 not found.' })
  }
})
