import { createContext, useContext } from 'react'

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
    return (
        <AppContext.Provider
            value={{
                showToast: (toastMessage) => {
                    console.log(toastMessage)
                },
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useContextApp = () => {
    return useContext(AppContext)
}
