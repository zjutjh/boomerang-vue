const path = require('path')
const apiMap = require('../src/api/map')
const mockPath = path.join('./mock')
const apiPathMap = {}

for (let key of Object.keys(apiMap)) {
  const value = apiMap[key]
  const wildcard = value.replace(/{\w+}/, '*')
  apiPathMap[wildcard] = key
}

module.exports = function (app) {
  Object.keys(apiPathMap).forEach((wildcard) => {
    app.get('/mock' + wildcard, function (req, res) {
      // const pathname = req._parsedUrl.pathname
      const apiName = apiPathMap[wildcard]
      const mockFile = path.resolve(mockPath, apiName + '.js')
      delete require.cache[mockFile] // delete cache, so you can edit mock data any time
      const result = require(mockFile)(req)
      if (result.$delay) {
        setTimeout(() => {
          res.json(result)
        }, result.$delay)
      } else {
        res.json(result)
      }
    })
  })
}
