function auth (req, res, next) {
  const { Authorization } = req.headers
  const token = 'vinliToken'
  if (Authorization !== token) {
    res.jsonp({
      code: 401,
      msg: 'Invalid token.'
    })
  }
  next()
}

module.exports = auth
