import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:60007'

// axios.defaults.headers.common['Authorization'] = '123456';
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.info(response)
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
});


export { axios }