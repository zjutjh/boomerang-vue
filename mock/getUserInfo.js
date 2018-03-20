module.exports = function (req) {
  const params = req.params
  const userId = params[0]
  return {
    code: 1,
    data: {
      id: userId,
      name: 'John'
    },
    error: ''
  }
}
