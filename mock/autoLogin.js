module.exports = function (req) {
  return {
    $delay: 1000,
    code: 1,
    data: {
      token: 'JohnsToken'
    },
    error: ''
  }
}
