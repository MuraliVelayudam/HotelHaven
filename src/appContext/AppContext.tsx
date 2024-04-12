import { createContext, useContext, useState } from 'react'
import Toast from '../components/Toast'
import * as apiClient from '../apiClient'
import { useQuery } from 'react-query'

type ToastMessage = {
    message: string
    type: 'SUCCESS' | 'ERROR'
}

type AppContextType = {
    showToast: (toastMessage: ToastMessage) => void
    isLoggedIn: boolean
}

type ChildrenType = {
    children: React.ReactNode
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppContextProvider = ({ children }: ChildrenType) => {
    const [toast, setToast] = useState<ToastMessage | undefined>(undefined)
    const { isError } = useQuery('validateToken', apiClient.verifyToken, {
        retry: false,
    })

    return (
        <AppContext.Provider
            value={{
                showToast: (toastMessage) => {
                    setToast(toastMessage)
                },
                isLoggedIn: !isError,
            }}
        >
            {toast && <Toast message={toast.message} type={toast.type} onclose={() => setToast(undefined)} />}
            {children}
        </AppContext.Provider>
    )
}

export const useContextApp = () => {
    return useContext(AppContext)
}
