import axios from 'axios'

export default function (url, originOptions) {
  const options = {
    credentials: 'include',
    ...originOptions
  }
  const token = this.getValue(this.$store, 'state.auth.token', '') || ''
  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`
  }

  return axios(url, options).then(response => {
    return response.data
  })
}
