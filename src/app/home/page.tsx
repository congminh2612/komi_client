'use client'
import { BaseButton } from '@/components/button'
import { resetToken } from '@/features/auth/services/resetToken'
import { useMutation } from '@tanstack/react-query'

const HomePage = () => {
  const mutation = useMutation(resetToken, {
    onSuccess(data) {
      console.log(data)
    },
    onError(error) {
      console.log(error)
    }
  })
  return (
    <div>
      <div>
        <BaseButton title="Reset" handleClick={() => mutation.mutate()} />
      </div>
    </div>
  )
}
export default HomePage
