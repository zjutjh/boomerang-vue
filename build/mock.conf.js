const path = require('path')
const url = require('url')
const mockPath = path.join('./mock')
// const apiMap = require('../src/api/map')
// const apiPathMap = {}
//
// for (let key of Object.keys(apiMap)) {
//   const value = apiMap[key]
//   const wildcard = value.replace(/{\w+}/, '*')
//   apiPathMap[wildcard] = key
// }

module.exports = function (app) {
  app.all('/mock/*', function (req, res) {
    if (req.url.match(/^\/mock\//)) {
      const pathname = url.parse(req.url).pathname
      const mockFile = path.resolve(mockPath, pathname.replace(/^\/mock\//, '') + '.js')
      delete require.cache[mockFile] // delete cache, so you can edit mock data any time
      try {
        const result = require(mockFile)(req)
        if (result.$delay) {
          setTimeout(() => {
            res.json(result)
          }, result.$delay)
        } else {
          res.json(result)
        }
      } catch (e) {
        res.json({
          code: 1,
          error: e.message
        })
      }
    }
    // // const pathname = req._parsedUrl.pathname
    // // const apiName = apiMap[wildcard]
  })
}
