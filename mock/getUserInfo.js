module.exports = function (req) {
  const params = req.params
  const userId = params[0]
  return {
    $delay: 1000,
    code: 200,
    data: {
      id: userId,
      name: 'John'
    },
    error: null
  }
}
