import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminDashboard from './components/AdminDashboard'
import Home from './components/Home'
import PetsList from './components/PetsList'
import { UserMenu } from './components/UserMenu'
function App() {
    return (
        <main className="App">
            <UserMenu />
            <Routes>
                <Route index element={<Home />} />
                <Route path="pets/" element={<PetsList />} />
                <Route path="admin/*" element={<AdminDashboard />} />
            </Routes>
        </main>
    )
}

export default App
