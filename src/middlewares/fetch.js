export default function (url, originOptions) {
  const options = {
    credentials: 'include',
    ...originOptions
  }

  return fetch(url, options).then(res => res.json())
}
