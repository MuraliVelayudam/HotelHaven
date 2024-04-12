import { RegisterFormData } from './pages/Register'

const API_URL = import.meta.env.VITE_API_URL

//User Register

export const userRegister = async (formData: RegisterFormData) => {
    const res = await fetch(`${API_URL}/api/user/register`, {
        credentials: 'include',
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

// Verify Token for User Login Or Not

export const verifyToken = async () => {
    const res = await fetch(`${API_URL}/api/auth/verifyToken`)

    if (!res.ok) {
        throw new Error('Invalid Token')
    }

    return res.json()
}
