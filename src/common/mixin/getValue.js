export default function (object, originalParams = [], defaultValue = undefined) {
  const params = typeof originalParams === 'string' ? originalParams.split('.') : originalParams
  if (!Array.isArray(params)) {
    throw new Error('getValue参数错误, 第二个参数应为字符串或者数组')
  }
  if (params.length <= 0) {
    return object
  }
  const result = params.reduce((subject, key) => {
    if (subject === undefined) {
      return undefined
    }
    if (key.toString() === '') {
      return subject
    }
    return subject[key]
  }, object)
  return result === undefined ? defaultValue : result
}
