const apiMap = require('./map')
const env = process.env ? process.env.NODE_ENV : 'production'
const host = process.env.DEV_HOST || 'localhost'
const devPort = process.env.DEV_PORT || '3000'
const devUrl = `http://${host}:${devPort}`

const serverUrl = 'http://example.com/'

/**
 * get API url by API name
 * @return {string}
 */
export default function API (name, params = {}, ext = {}) {
  const apiPath = apiMap[name]
  if (!apiPath) {
    throw new Error('Cannot find a mock API path.')
  }
  const prefix = env === 'development' ? `${devUrl}/mock` : serverUrl
  const postfix = ext.postfix || ''
  let url = prefix + apiPath + postfix
  Object.keys(params).forEach((key) => {
    url = url.replace(new RegExp(`{${key}}`, 'g'), params[key])
  })

  return url
}
