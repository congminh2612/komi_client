import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true
const axiosInstance = axios.create()

axiosInstance.interceptors.request.use(
  async function (config) {
    // Làm gì đó trước khi request dược gửi đi
    return config
  },
  function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error)
  }
)
axiosInstance.interceptors.response.use(
  function (response) {
    console.log(response)

    return response.data
  },
  function (error) {
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    return Promise.reject(error)
  }
)

export { axiosInstance }
