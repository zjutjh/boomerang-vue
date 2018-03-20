import axios from 'axios'

export default function (url, originOptions) {
  const options = {
    credentials: 'include',
    ...originOptions
  }

  return axios(url, options).then(response => {
    return response.data
  })
}
