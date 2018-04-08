module.exports = function (req) {
  return {
    $delay: 1000,
    code: 1,
    data: {
      summary: 'JohnsToken',
      title: '公告',
      content: '这是一条公告'
    },
    error: ''
  }
}
