module.exports = function (req) {
  return {
    $delay: 1000,
    code: 200,
    error: null,
    data: {
      token: 'JohnsToken'
    }
  }
}
