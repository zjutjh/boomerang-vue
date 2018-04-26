module.exports = function (req) {
  const params = req.params
  const userId = params[0]
  return {
    $delay: 1000,
    code: 1,
    data: {
      id: userId,
      name: 'John',
      headImg: '../build/logo.png',
      qq: ' ',
      num: ' '
    },
    error: ''
  }
}
