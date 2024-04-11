import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Register from './pages/Register'

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
        </Routes>
    )
}
