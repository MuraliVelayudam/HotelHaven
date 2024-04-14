import { Link } from 'react-router-dom'
import { useContextApp } from '../appContext/AppContext'
import SignOut from './SignOut'

export default function Header() {
    const context = useContextApp()
    const { isLoggedIn } = context

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
                            <Link
                                to={'/my_bookings'}
                                className="flex text-white items-center hover:bg-blue-600 px-2 rounded-sm font-semibold"
                            >
                                My Bookings
                            </Link>
                            <Link
                                to={'/my_hotels'}
                                className="flex text-white items-center hover:bg-blue-600 px-2 rounded-sm font-semibold"
                            >
                                My Hotels
                            </Link>
                            <SignOut />
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
