import { axiosInstance } from '@/services/axios.config'
import axios, { AxiosError } from 'axios'
import { IFormLogin } from '../types'

export const signIn = async (dataLogin: IFormLogin) => {
  try {
    const res = await axiosInstance.post('/auth/login', dataLogin)
    return res
  } catch (error: AxiosError | unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message)
    } else {
      throw error
    }
  }
}
