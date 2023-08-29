'use client'
import BaseButton from '@/components/button/BaseButton'
import { TextInput } from '@/components/input'
import { Typography } from '@/components/typography'
import { signIn } from '@/features/auth/services/signIn'
import { IFormLogin } from '@/features/auth/types'
import { auth, provider } from '@/services/firebase.config'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { signInWithPopup } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { ZodType, z } from 'zod'

const LoginPage = () => {
  const router = useRouter()
  const FormLogin: ZodType<IFormLogin> = z.object({
    email: z.string(),
    password: z.string()
  })

  const { register, handleSubmit } = useForm<IFormLogin>({
    resolver: zodResolver(FormLogin)
  })

  const mutation = useMutation(signIn, {
    onSuccess() {
      router.push('/home')
    },
    onError(error) {
      toast.error(`${error}`.split(':')[1])
    }
  })

  const onSubmit = (data: IFormLogin) => {
    console.log(data)
    mutation.mutate(data)
  }

  const handleFacebookLogin = async () => {
    try {
      const user = await signInWithPopup(auth, provider)
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="shadow-lg h-[600px] lg:h-[700px] mt-[120px]  overflow-y-auto  w-[400px]  lg:w-[500px] xl:w-[600px]  mx-auto my-14 bg-gray-200 z-0">
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 2000
          }}
        />
      </div>
      <div className="flex flex-col space-y-10 pt-8">
        <Typography
          align="center"
          variant="h4"
          weight="bold"
          className="text-xl xl:text-3xl"
        >
          Login
        </Typography>
        <Typography align="center" className="xl:text-base">
          Please login using account detail bellow.
        </Typography>
      </div>
      <form
        className="pt-16 px-8 space-y-6 xl:space-y-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center space-x-[56px] lg:space-x-28 xl:space-x-[116px]">
          <label htmlFor="" className="xl:text-lg font-medium">
            Email
          </label>
          <TextInput
            className="px-2 py-2 w-[200px] lg:w-[260px] xl:w-[300px]"
            type="email"
            placeholder="Email"
            {...register('email')}
          />
        </div>
        <div className="flex items-center space-x-6 lg:space-x-[78px]">
          <label htmlFor="" className="xl:text-lg font-medium">
            Password
          </label>
          <TextInput
            className="py-2 w-[200px] lg:w-[260px] xl:w-[300px]"
            type="password"
            placeholder="Password"
            {...register('password')}
          />
        </div>
        <Typography
          align="center"
          className="cursor-pointer hover:text-gray-600 pt-2 xl:text-base font-medium"
        >
          Forgot Your Password
        </Typography>
        <div className="flex justify-center">
          <BaseButton
            className="hover:bg-slate-600  text-white text-md xl:text-lg font-bold px-3 py-2 lg:px-7 rounded-3xl"
            title="Sign In"
            type="submit"
          />
        </div>
      </form>
      <div>
        <Typography
          align="center"
          className="text-sm lg:text-base font-medium py-4"
        >
          Or sign in with
        </Typography>
      </div>
      <div className="flex items-center justify-center space-x-6 pt-2">
        <BaseButton
          spacing="pl-[10px]"
          title="Facebook"
          className="px-4 rounded-lg lg:px-12 xl:px-14 py-[8px] bg-blue-500 hover:bg-opacity-70 space-x-6"
          icon="facebook"
          iconClass=""
          handleClick={handleFacebookLogin}
        />
        <BaseButton
          spacing="pl-[10px]"
          title="Google"
          className="px-6 rounded-lg hover:bg-slate-200 lg:px-14 xl:px-16 border-[1px] border-gray-400 py-[8px] bg-white text-slate-800  space-x-6"
          icon="google"
          iconClass=""
        />
      </div>
      <div>
        <Typography align="center" className="text-base xl:text-lg pt-8">
          <Link
            href={'/sign-up'}
            className="font-semibold cursor-pointer hover:opacity-70"
          >
            Sign up
          </Link>{' '}
          if you don't have an account yet
        </Typography>
      </div>
    </div>
  )
}

export default LoginPage
