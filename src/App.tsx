import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Register from './pages/Register'
import SignIn from './pages/SignIn'

export default function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <h1>Home</h1>
                    </Layout>
                }
            />
            <Route
                path="/register"
                element={
                    <Layout>
                        <Register />
                    </Layout>
                }
            />
            <Route
                path="/singIn"
                element={
                    <Layout>
                        <SignIn />
                    </Layout>
                }
            />
        </Routes>
    )
}
