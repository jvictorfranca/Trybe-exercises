const { getUserName } = require('./ex2-3') // pega só a função get username

// const {users} = require('./ex2-3')
// console.log(users)


describe('user name that exists', ()=>{
  test('if name 4 exists', ()=>{
    expect.assertions(1) 
    return getUserName(4).then((name)=> {expect(name).toEqual('Mark')})
  })


  test('if names 5 exists', ()=>{
    expect.assertions(1) 
    return getUserName(5).then((name)=> {expect(name).toEqual('Paul')})
  })
})


describe('user name does not exist', ()=>{
  test('error not found', ()=>{
    return getUserName(7).catch((error)=>expect(error).toEqual({ error: 'User with 7 not found.' }))
  })
})

