module.exports = function (req) {
  return {
    $delay: 1000,
    'code': 200,
    'error': null,
    'data': {
      'items': [
        {
          'id': 123, // 物品id
          'title': 'find!find!find!find!find!find!find!find!find!', // 物品名称
          'description': '掉在洗衣房了，很着急，求好心人', // 描述
          'lost_place': '西十五洗衣房', // 丢失地点
          'images': [ // 图片
            '//up.enterdesk.com/edpic_source/59/4f/e8/594fe8bd99b7b1c23bee38dd1b88fda2.jpg'
          ],
          'lost_type': 1, // 招领
          'type': { // 由type_id查询而来
            'id': 1,
            'name': '校园卡',
            'icon': 'xxx'
          },
          'qq': 'xxxx',
          'phone': 'xxxxx',
          'status': 1, // 已寻回
          'deleted': 0, // 未删除
          'user': { // 发布者信息，由uid查询而来
            'id': 1, // 用户id
            'uno': 'xxxx' // 用户学号
            // 其他字段看需求是否增加
          },
          'contact_uno': '',
          'created_at': 'xxxx-xx-xx xx:xx:xx',
          'updated_at': 'xxxx-xx-xx xx:xx:xx'
        },
        {
          'id': 111, // 物品id
          'title': '葫芦娃塑料桶',
          'description': '葫芦娃塑料桶，是哪个人的？葫芦娃塑料桶，是哪个人的？葫芦娃塑料桶，是哪个人的？',
          'lost_place': '西十五洗衣房',
          'images': [
            '//up.enterdesk.com/edpic_source/c8/c9/76/c8c97650000168f7171ea233e9cb6deb.jpg'
          ],
          'lost_type': 1, // 招领
          'type': { // 由type_id查询而来
            'id': 4,
            'name': '其他',
            'icon': 'xxx'
          },
          'qq': 'xxxx',
          'phone': 'xxxxx',
          'status': 0, // 还在寻主中
          'deleted': 0, // 未删除
          'user': { // 发布者信息，由uid查询而来
            'id': 2, // 用户id
            'uno': 'xxxx' // 用户学号
            // 其他字段看需求是否增加
          },
          'contact_uno': '',
          'created_at': 'xxxx-xx-xx xx:xx:xx',
          'updated_at': 'xxxx-xx-xx xx:xx:xx'
        }
      ]
    }
  }
}
