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
            ? 'fixed top-4 right-4 bg-green-600 px-3 py-4 rounded-sm max-w-md text-white'
            : 'fixed top-4 right-4 bg-red-600 px-3 py-4 rounded-sm max-w-md text-white'

    return (
        <div className={styles}>
            <div className="">
                <span>{message}</span>
            </div>
        </div>
    )
}

export default Toast
