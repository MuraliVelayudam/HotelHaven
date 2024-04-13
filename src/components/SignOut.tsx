import { useMutation, useQueryClient } from 'react-query'
import * as apiClient from '../apiClient'
import { useContextApp } from '../appContext/AppContext'

export default function SignOut() {
    const context = useContextApp()
    const { showToast } = context

    const queryClient = useQueryClient()

    const mutation = useMutation(apiClient.userSignOut, {
        onSuccess: async () => {
            await queryClient.invalidateQueries('validateToken')
            showToast({
                type: 'SUCCESS',
                message: 'Signed Out Successfully',
            })
        },
        onError: (error: Error) => {
            showToast({
                type: 'ERROR',
                message: error.message,
            })
        },
    })

    const onHandleSignOut = () => {
        mutation.mutate()
    }

    return (
        <button
            onClick={onHandleSignOut}
            className="flex bg-white items-center font-semibold px-3 text-blue-800 rounded-sm hover:bg-slate-100 tracking-wide"
        >
            Sign Out
        </button>
    )
}
