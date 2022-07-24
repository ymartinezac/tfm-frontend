import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminDashboard from './components/AdminDashboard'
import Home from './components/Home'
import PetsList from './components/PetsList'
import { ProtectedRoute } from './components/ProtectedRoute'
import { UserMenu } from './components/UserMenu'
function App() {
    return (
        <div className="App">
            <UserMenu />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/admin" element={<ProtectedRoute component={AdminDashboard} />} />
                <Route path="pets/" element={<PetsList />} />
                {/*}  <Route path="admin/*" element={<AdminDashboard />} /> */}
            </Routes>
        </div>
    )
}

export default App
