import { axiosInstance } from '@/services/axios.config'

export const resetToken = async () => {
  try {
    return await axiosInstance.post('/auth/token/reset', {
      withCredentials: true
    })
  } catch (error) {
    console.log(error)
  }
}
