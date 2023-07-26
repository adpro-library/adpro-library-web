import React from 'react'
import { FirstFormInputs } from './interface'
import { useFormContext } from 'react-hook-form'
import CustomTextInput from 'src/components/elements/CustomTextInput'

const FirstForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FirstFormInputs>()

  return (
    <>
      <div className="w-full space-y-5">
        <div className="flex items-end justify-center text-center space-x-3 mb-20">
          <span className="text-3xl lg:text-6xl font-black text-crayola">
            Login
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-y-10 w-full lg:w-4/5 mx-auto">
        <CustomTextInput
          error={errors.username && 'Please fill your username'}
          type="text"
          className="w-full"
          label="Username"
          placeholder="Your Username"
          {...register('username', { required: true })}
        />
        <CustomTextInput
          error={errors.name && 'Please fill your name'}
          type="text"
          className="w-full"
          label="Name"
          placeholder="Your name"
          {...register('name', { required: true })}
        />
        <CustomTextInput
          error={errors.password && 'Please fill your password'}
          type="text"
          className="w-full"
          label="Password"
          placeholder="Your password"
          {...register('password', { required: true })}
        />
      </div>
    </>
  )
}

export default FirstForm
