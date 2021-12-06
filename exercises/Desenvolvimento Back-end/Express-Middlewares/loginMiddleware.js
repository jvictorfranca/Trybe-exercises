module.exports = (req, res, next) => {
  let token = ''
  const {username, password, email} = req.body
  for (let index = 0; index < 12; index+=1){
    token = token + (Math.floor(Math.random()*10)).toString()
  }
  if (username.length < 3) {next({message: 'usuário muito pequeno', status: 400})}
  if (password.length <3 || password.length > 8) {next({message: 'senha invalida', status: 400})}
  if (!email.includes('@')){next({message: 'email invalido', status:400})}
  res.status(200).json({token})
  next()
}