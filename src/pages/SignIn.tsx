import { useForm } from 'react-hook-form'
import * as apiClient from '../apiClient'
import { useMutation, useQueryClient } from 'react-query'
import { useContextApp } from '../appContext/AppContext'
import { Link, useNavigate } from 'react-router-dom'

export type SignInFormData = {
    email: string
    password: string
}

export default function SignIn() {
    const navigate = useNavigate()

    const queryClient = useQueryClient()

    const form = useForm<SignInFormData>()
    const { register, formState, handleSubmit } = form
    const { errors } = formState

    const context = useContextApp()
    const { showToast } = context

    const mutation = useMutation(apiClient.userSignIn, {
        onSuccess: async () => {
            showToast({
                type: 'SUCCESS',
                message: 'Logged In Successfully ',
            })

            await queryClient.invalidateQueries('validateToken')

            navigate('/')
        },
        onError: (error: Error) => {
            showToast({
                type: 'ERROR',
                message: error.message,
            })
        },
    })

    const onSubmit = (formData: SignInFormData) => {
        mutation.mutate(formData)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-5 gap-5" noValidate>
            <h1 className="text-center text-3xl md:text-4xl font-thin uppercase tracking-widest">Sign In</h1>
            <div className="flex flex-col gap-10">
                <label className="flex flex-col font-semibold ">
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

                <label className="flex flex-col font-semibold ">
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
                <button className="bg-blue-700 text-white px-6 py-2 rounded font-semibold tracking-wide">SignIn</button>
                <p className="mt-5">
                    Not Have an Account ?{' '}
                    <span>
                        <Link to={'/register'} className="px-2 font-semibold text-blue-700 hover:underline">
                            Sign Up Here
                        </Link>
                    </span>
                </p>
            </div>
        </form>
    )
}
