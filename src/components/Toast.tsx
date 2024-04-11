import { useEffect } from 'react'

type ToastType = {
    message: string
    type: 'SUCCESS' | 'ERROR'
    onclose: () => void
}

const Toast = ({ message, type, onclose }: ToastType) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onclose()
        }, 5000)

        return () => {
            clearTimeout(timer)
        }
    }, [onclose])

    const styles =
        type === 'SUCCESS'
            ? 'fixed top-5 right-20 z-50 px-7 py-3 rounded-md bg-green-600 text-white max-w-md'
            : 'fixed top-5 right-20 z-50 px-7 py-3 rounded-md bg-red-600 text-white max-w-md'

    return (
        <div className={styles}>
            <div className="flex justify-center items-center">
                <span className="text-md text-semibold tracking-wide">{message}</span>
            </div>
        </div>
    )
}

export default Toast
