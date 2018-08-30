module.exports = function (req) {
  return {
    $delay: 1000,
    'code': 200,
    'error': null,
    'data': {
      'id': 123, // 物品id
      'uid': 1, // 用户id
      'title': 'lostlostlost', // 物品名称
      'description': '掉在洗衣房了，很着急，求好心人', // 描述
      'lost_place': '西十五洗衣房', // 丢失地点
      'images': [ // 图片
        '//up.enterdesk.com/edpic_source/55/34/ac/5534acffb3f7e6d00de9f40176e68cd9.jpg',
        '//up.enterdesk.com/edpic_source/55/34/ac/5534acffb3f7e6d00de9f40176e68cd9.jpg'
      ],
      'lost_type': 0, // 失物
      'type': { // 由type_id查询而来
        'id': 1,
        'name': '校园卡',
        'icon': 'xxx'
      },
      'qq': 'xxxx',
      'phone': 'xxxxx',
      'status': 1 // 已寻回
    }
  }
}
