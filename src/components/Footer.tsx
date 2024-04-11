import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="bg-blue-800 py-6 px-5">
            <div className="container mx-auto flex items-center  justify-between text-white">
                <Link to={'/'} className="text-3xl font-extralight uppercase  tracking-widest">
                    Hotel Haven
                </Link>
                <span className="text-sm font-extralight cursor-pointer">
                    <p>Privacy Policy</p>
                    <p>Terms Of Service</p>
                </span>
            </div>
        </div>
    )
}
