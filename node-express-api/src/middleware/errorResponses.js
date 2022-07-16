module.exports.ErrorBadRequest = (msg) => {
  let error = new Error(msg)
  error.message = msg
  error.status = 400
  return error
}

module.exports.ErrorUnauthorized = (msg) => {
  let error = new Error(msg)
  error.message = msg
  error.status = 401
  return error
}

module.exports.ErrorNotFound = (msg) => {
  let error = new Error(msg)
  error.message = msg
  error.status = 404
  return error
}