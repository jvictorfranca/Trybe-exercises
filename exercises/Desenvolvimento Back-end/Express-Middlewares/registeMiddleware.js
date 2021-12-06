module.exports = (req, res, next) => {
  const {username, password, email} = req.body
  if (username.length < 3) {next({message: 'usuário muito pequeno', status: 400})}
  if (password.length <3 || password.length > 8) {next({message: 'senha invalida', status: 400})}
  if (!email.includes('@')){next({message: 'email invalido', status:400})}
  const obj = {username, password, email}
  res.status(200).json(obj)
  next()
}