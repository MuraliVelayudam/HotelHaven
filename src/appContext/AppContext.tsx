import { createContext, useContext, useState } from 'react'
import Toast from '../components/Toast'

type ToastMessage = {
    message: string
    type: 'SUCCESS' | 'ERROR'
}

type AppContextType = {
    showToast: (toastMessage: ToastMessage) => void
}

type ChildrenType = {
    children: React.ReactNode
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppContextProvider = ({ children }: ChildrenType) => {
    const [toast, setToast] = useState<ToastMessage | undefined>(undefined)

    return (
        <AppContext.Provider
            value={{
                showToast: (toastMessage) => {
                    setToast(toastMessage)
                },
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
