import { Link } from 'react-router-dom'
import { useContextApp } from '../appContext/AppContext'
import { useMutation } from 'react-query'
import * as apiClient from '../apiClient'

export default function Header() {
    const context = useContextApp()
    const { isLoggedIn, showToast } = context

    const mutation = useMutation(apiClient.userSignOut, {
        onSuccess: () => {
            showToast({ type: 'SUCCESS', message: 'Successfully Signed Out' })
        },
        onError: (error: Error) => {
            showToast({ type: 'ERROR', message: error.message })
        },
    })

    const onSignOut = () => {
        mutation.mutate()
    }

    return (
        <div className="bg-blue-800 py-6 px-5">
            <div className="container mx-auto flex  justify-between">
                <span className="text-white uppercase tracking-widest text-xl">
                    <Link to={'/'} className="font-extralight">
                        <span className="text-4xl font-semibold">H</span>
                        otel
                        <span className="text-4xl font-semibold">H</span>
                        aven
                    </Link>
                </span>
                <span className="flex space-x-2">
                    {isLoggedIn ? (
                        <>
                            <Link to={'/my_bookings'}>My Bookings</Link>
                            <Link to={'/my_hotels'}>My Hotels</Link>
                            <button
                                onClick={onSignOut}
                                className="flex bg-white items-center font-semibold px-3 text-blue-800 rounded-sm hover:bg-slate-100 tracking-wide"
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <Link
                            to={'/singIn'}
                            className="flex bg-white items-center font-semibold px-3 text-blue-800 rounded-sm hover:bg-slate-100 tracking-wide"
                        >
                            Sign In
                        </Link>
                    )}
                </span>
            </div>
        </div>
    )
}
