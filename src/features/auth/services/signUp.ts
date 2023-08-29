import axios, { AxiosError } from 'axios'
import { IFormRegister } from '../types'

export const signUp = async (
  dataSignUp: Omit<IFormRegister, 'passwordConfirm'>
) => {
  try {
    const res = await axios.post(
      'http://localhost:8000/api/auth/register',
      dataSignUp
    )
    return res.data
  } catch (error: AxiosError | unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message)
    } else {
      throw error
    }
  }
}
