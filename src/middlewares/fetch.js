export default function (url, originOptions) {
  const options = {
    credentials: 'include',
    ...originOptions
  }

  return fetch(url, options).then(response => {
    if (response.headers.get('content-type').includes('application/json')) {
      return response.json()
    }
    return response.text()
  })
}
