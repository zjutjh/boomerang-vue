module.exports = function (req) {
  return {
    $delay: 1000,
    'code': 200,
    'data': {
      'items': [
        {type: '校园卡', index: 1},
        {type: '雨伞', index: 2},
        {type: '钥匙', index: 3},
        {type: '图书', index: 4},
        {type: '其它', index: 5}
      ]
    }
  }
}
