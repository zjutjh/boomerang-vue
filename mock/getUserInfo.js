module.exports = function (req) {
  const params = req.params
  const userId = params[0]
  return {
    $delay: 1000,
    code: 1,
    data: {
      id: userId,
      username: 'John',
      headImg: '../build/logo.png'
    },
    error: ''
  }
}
