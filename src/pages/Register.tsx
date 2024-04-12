import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import * as apiClient from '../apiClient'
import { useContextApp } from '../appContext/AppContext'
import { useNavigate } from 'react-router-dom'

export type RegisterFormData = {
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
}

export default function Register() {
    const navigate = useNavigate()

    const form = useForm<RegisterFormData>()
    const { register, handleSubmit, formState, watch } = form
    const { errors } = formState

    const context = useContextApp()
    const { showToast } = context

    const mutation = useMutation(apiClient.userRegister, {
        onSuccess: () => {
            showToast({
                type: 'SUCCESS',
                message: 'Registration Successful',
            })
            navigate('/')
        },
        onError: (error: Error) => {
            showToast({
                type: 'ERROR',
                message: error.message,
            })
        },
    })

    const onSubmit = (formData: RegisterFormData) => {
        console.log(formData)
        mutation.mutate(formData)
    }

    return (
        <form className="flex flex-col gap-4 px-5" noValidate onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center text-3xl md:text-4xl font-thin uppercase tracking-widest">Create An Account</h1>
            <div className="flex flex-col md:flex-row gap-5">
                <label className="flex-1 font-semibold  ">
                    First Name
                    <input
                        type="text"
                        placeholder="Enter Your First Name"
                        className="w-full border border-blue-500 px-3 py-2 outline-none rounded"
                        {...register('firstName', {
                            required: 'First Name is Required',
                            minLength: {
                                value: 3,
                                message: 'Name must be at least 3 characters',
                            },
                        })}
                    />
                    {errors.firstName && <span className="text-xs text-red-600">{errors.firstName.message}</span>}
                </label>
                <label className="flex-1 font-semibold">
                    Last Name
                    <input
                        type="text"
                        placeholder="Enter Your Last Name"
                        className="w-full border border-blue-500 px-3 py-2 outline-none rounded"
                        {...register('lastName', {
                            required: 'Last Name is Required',
                        })}
                    />
                    {errors.lastName && <span className="text-xs text-red-600">{errors.lastName.message}</span>}
                </label>
            </div>
            <div>
                <label className="flex flex-col font-semibold  ">
                    Email
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="w-full border border-blue-500 px-3 py-2 outline-none rounded"
                        {...register('email', {
                            required: 'Email is Required',
                            pattern: {
                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email address',
                            },
                        })}
                    />
                    {errors.email && <span className="text-xs text-red-600">{errors.email.message}</span>}
                </label>
            </div>
            <div>
                <label className="flex flex-col font-semibold  ">
                    Password
                    <input
                        type="password"
                        placeholder="Enter Your Password"
                        className="w-full border border-blue-500 px-3 py-2 outline-none rounded"
                        {...register('password', {
                            required: 'Password is Required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 3 characters',
                            },
                        })}
                    />
                    {errors.password && <span className="text-xs text-red-600">{errors.password.message}</span>}
                </label>
            </div>
            <div>
                <label className="flex flex-col font-semibold  ">
                    Confirmed Password
                    <input
                        type="password"
                        placeholder="Enter Your Confirm Password"
                        className="w-full border border-blue-500 px-3 py-2 outline-none rounded"
                        {...register('confirmPassword', {
                            validate: (value) => {
                                if (!value) {
                                    return 'Confirm Password is Required'
                                } else if (watch('password') !== value) {
                                    return 'Password Not Match'
                                }
                            },
                        })}
                    />
                    {errors.confirmPassword && (
                        <span className="text-xs text-red-600">{errors.confirmPassword.message}</span>
                    )}
                </label>
            </div>
            <div className="flex items-center justify-between flex-col md:flex-row gap-4">
                <button className="bg-blue-700 text-white px-6 py-2 rounded font-semibold tracking-wide">
                    Register
                </button>
                <p>Already have Account ?</p>
            </div>
        </form>
    )
}
