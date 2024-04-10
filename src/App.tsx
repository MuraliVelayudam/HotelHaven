import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'

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
        </Routes>
    )
}
