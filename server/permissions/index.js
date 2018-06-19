const deny = next => {
  const err = new Error('NOT ALLOWED')
  err.status = 401
  next(err)
}
const _isLoggedIn = req => !!req.user
const _isAdmin = req => req.user.isAdmin
const _isSelf = req => req.user.id === req.requestedUser.id

const isLoggedIn = function (req, res, next) {
  _isLoggedIn(req) ? next() : deny(next)
}

const isAdmin = function (req, res, next) {
  _isLoggedIn(req) && _isAdmin(req) ? next() : deny(next)
}

const isSelf = function (req, res, next) {
  _isLoggedIn(req) && _isSelf(req) ? next() : deny(next)
}

module.exports = {
  isLoggedIn, isAdmin, isSelf
}
