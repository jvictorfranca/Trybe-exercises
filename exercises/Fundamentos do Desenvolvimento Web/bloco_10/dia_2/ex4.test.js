const getRepos =  require('./ex4')
const fetch = require('node-fetch')

describe('if repositories exist', ()=>{
  test('if to-do exists', async ()=>{
    let API = await fetch('https://api.github.com/orgs/tryber/repos').then((bites)=>bites.json()).then((object)=>{
    return object
    })
    expect(API.find((project)=>project.name === 'sd-01-week4-5-project-todo-list').name).toEqual('sd-01-week4-5-project-todo-list')
  })

  test('if meme exist', async ()=>{
    let API = await fetch('https://api.github.com/orgs/tryber/repos').then((bites)=>bites.json()).then((object)=>{
    return object
    })
    expect(API.find((project)=>project.name === 'sd-01-week4-5-project-meme-generator').name).toEqual('sd-01-week4-5-project-meme-generator')
  })
})

