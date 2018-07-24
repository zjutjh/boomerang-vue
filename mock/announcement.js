module.exports = function (req) {
  return {
    $delay: 1000,
    code: 200,
    data: {
      'id': 1,
      'title': '公告',
      'content': '最新公告'
    },
    error: null
  }
}
