const apiMap = {
  'announcement': '/api/announcement',
  'autoLogin': '/api/auto_login',
  'getUserInfo': '/api/getUserInfo',
  'lost/lists': '/api/lost/lists',
  'find/lists': '/api/find/lists',
  'detail': '/api/detail/{id}',
  'mine/lost': '/api/mine/lists/lost',
  'mine/found': '/api/mine/lists/found',
  'mine/unfinished': '/api/mine/lists/unfinished',
  'delete': '/api/item/delete',
  'foundMark': 'api/mine/detail/{uid}/{id}/lost',
  'lostMark': 'api/mine/detail/{uid}/{id}/found'
}

module.exports = apiMap
