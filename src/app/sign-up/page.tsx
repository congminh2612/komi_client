'use client'
import BaseButton from '@/components/button/BaseButton'
import { TextInput } from '@/components/input'
import { Typography } from '@/components/typography'
import { signUp } from '@/features/auth/services/signUp'
import { IFormRegister } from '@/features/auth/types/auth.type'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'react-hot-toast'
import { ZodType, z } from 'zod'

const SignUpPage = () => {
  const router = useRouter()
  const FormRegister: ZodType<IFormRegister> = z
    .object({
      name: z.string().nonempty({ message: 'Name is not empty' }),
      phone: z.string().nonempty({ message: 'Phone is not empty' }),
      address: z.string(),
      email: z
        .string()
        .nonempty({ message: 'Email is not empty' })
        .email({ message: 'Email does not exist' }),
      password: z
        .string()
        .nonempty({ message: 'Password is not empty' })
        .min(6, 'Password must contain at least 6 characters')
        .refine((value) => value.length >= 6, {
          message: 'Password must contain at least 6 characters',
          path: ['password'] // Để chỉ định rõ ràng trường liên quan đến lỗi
        }),
      passwordConfirm: z
        .string()
        .nonempty({ message: 'Password confirm is not empty' })
    })
    .refine(async (data) => await (data.password === data.passwordConfirm), {
      message: "Password doesn't match",
      path: ['passwordConfirm']
    })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormRegister>({
    resolver: zodResolver(FormRegister)
  })

  const mutation = useMutation(signUp, {
    async onSuccess(data) {
      await toast.success('Sign up successfully')
      router.push('/sign-in')
    },
    onError(error: any) {
      toast.error(`${error}`.split(':')[1])
    }
  })

  const onSubmit = (data: IFormRegister, e: any) => {
    e.preventDefault()
    console.log(data)
    mutation.mutate(data)
  }
  if (mutation.isError) {
    console.log(mutation.error)
  }
  return (
    <div className="shadow-lg h-[900px] w-[500px] lg:w-[650px] mx-auto my-14 bg-gray-100 overflow-y-auto ">
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
        <Typography align="center" variant="h2" weight="bold">
          Create Account
        </Typography>
        <Typography align="center" className="xl:text-lg">
          Please register using account detail bellow.
        </Typography>
        <div className="flex justify-center">
          <Typography align="center" className="xl:text-lg">
            Already have an account?
          </Typography>
          <Typography
            align="center"
            weight="bold"
            className="pl-2 hover:text-primary cursor-pointer xl:text-lg"
          >
            Sign In
          </Typography>
        </div>
      </div>
      <form
        className="pt-16 px-6 lg:px-10 space-y-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center space-x-[116px] lg:space-x-[156px]">
          <label htmlFor="" className="xl:text-lg font-medium">
            Name
          </label>
          <div>
            <TextInput
              className="px-2 py-2 w-[250px] lg:w-[300px] 2xl:[w-330px]"
              type="text"
              placeholder="Name"
              {...register('name')}
            />
            {errors.name && (
              <Typography className="pt-2 text-sm text-red-500 text-left">
                {errors.name.message}
              </Typography>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-[112px] lg:space-x-[152px]">
          <label htmlFor="" className="xl:text-lg font-medium">
            Phone
          </label>
          <div>
            <TextInput
              className="px-2 py-2 w-[250px] lg:w-[300px] 2xl:[w-330px]"
              type="text"
              placeholder="Phone"
              {...register('phone')}
            />
            {errors.phone && (
              <Typography className="pt-2 text-sm text-red-500 text-left">
                {errors.phone.message}
              </Typography>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-[96px] lg:space-x-[136px]">
          <label htmlFor="" className="xl:text-lg font-medium">
            Address
          </label>
          <div>
            <TextInput
              className="px-2 py-2 w-[250px] lg:w-[300px] 2xl:[w-330px]"
              type="text"
              placeholder="Address"
              {...register('address')}
            />
            {errors.phone && (
              <Typography className="pt-2 text-sm text-red-500 text-left">
                {errors.phone.message}
              </Typography>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-[120px] lg:space-x-[162px]">
          <label htmlFor="" className="xl:text-lg font-medium">
            Email
          </label>
          <div>
            <TextInput
              className="px-2 py-2 w-[250px] lg:w-[300px] 2xl:[w-330px]"
              type="email"
              placeholder="Email"
              {...register('email')}
            />
            {errors.email && (
              <Typography className="pt-2 text-sm text-red-500 text-left">
                {errors.email.message}
              </Typography>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-[84px] lg:space-x-[122px]">
          <label htmlFor="" className="xl:text-lg font-medium">
            Password
          </label>
          <div>
            <TextInput
              className="px-2 py-2 w-[250px] lg:w-[300px] 2xl:[w-330px]"
              type="password"
              placeholder="Password"
              {...register('password')}
            />
            {errors.password && (
              <Typography className="pt-2 text-sm text-red-500 text-left">
                {errors.password.message}
              </Typography>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-[20px] lg:space-x-[50px]">
          <label htmlFor="" className="xl:text-lg font-medium">
            Confirm password
          </label>
          <div className="">
            <TextInput
              className="px-2 py-2 w-[250px] lg:w-[300px] 2xl:[w-330px]"
              type="password"
              placeholder="Password confirm"
              {...register('passwordConfirm')}
            />
            {errors.passwordConfirm && (
              <Typography className="pt-2 text-sm text-red-500 text-left ">
                {errors.passwordConfirm.message}
              </Typography>
            )}
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <BaseButton
            type="submit"
            className="text-white text-lg font-bold px-6 py-3 rounded-3xl"
            title="Create Account"
          />
        </div>
      </form>
    </div>
  )
}

export default SignUpPage
