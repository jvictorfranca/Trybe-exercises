module.exports = (err, req, res, next) => {
  if(err.status){res.status(err.status).json({message: err.message})}
  res.status(500).json({error: 'Erro inesperado'})
}