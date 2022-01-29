import axios from 'axios'

const getToken = () => {
  return new Promise(resolve => {
      resolve(`Bearer ${localStorage.getItem('token') || null}`)
  })
}

const api = axios.create({
    baseURL: 'https://black-archives.herokuapp.com'

})

api.interceptors.request.use(async function (config) {
  config.headers['Authorization'] = await getToken()
  return config
}, function (error) {
  console.log('Request error: ', error)
  return Promise.reject(error)
});

export default api;