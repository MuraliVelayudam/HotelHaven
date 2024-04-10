import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="bg-blue-800 py-6">
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
                    <Link
                        to={'/singIn'}
                        className="flex bg-white items-center font-semibold px-3 text-blue-800 rounded-sm hover:bg-slate-100 tracking-wide"
                    >
                        Sign In
                    </Link>
                </span>
            </div>
        </div>
    )
}
