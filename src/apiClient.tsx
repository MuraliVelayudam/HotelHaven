import { RegisterFormData } from './pages/Register'
import { SignInFormData } from './pages/SignIn'

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
    const res = await fetch(`${API_URL}/api/auth/verifyToken`, {
        credentials: 'include',
    })

    if (!res.ok) {
        throw new Error('Token Invalid')
    }

    const data = await res.json()
    return data
}

// User SignIn

export const userSignIn = async (formData: SignInFormData) => {
    const res = await fetch(`${API_URL}/api/auth/login`, {
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

// Sign Out

export const userSignOut = async () => {
    const res = await fetch(`${API_URL}/api/auth/signOut`, {
        credentials: 'include',
        method: 'POST',
    })

    if (!res.ok) {
        throw new Error('Error During Sign Out')
    }
}
