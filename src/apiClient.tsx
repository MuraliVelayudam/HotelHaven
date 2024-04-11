import { RegisterFormData } from './pages/Register'

const API_URL = import.meta.env.VITE_API_URL

export const userRegister = async (formData: RegisterFormData) => {
    const res = await fetch(`${API_URL}/api/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })

    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.error)
    }
}
