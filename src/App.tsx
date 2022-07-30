import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminDashboard from './components/AdminDashboard'
import { AdminProtectedRoute } from './components/AdminProtectedRoute'
import Home from './components/Home'
import NotAuthorized from './components/NotAuthorized'
import PetsList from './components/PetsList'
import { UserMenu } from './components/UserMenu'
function App() {
    return (
        <div className="App">
            <UserMenu />
            <Routes>
                <Route index element={<Home />} />
                <Route
                    path="/admin/*"
                    element={<AdminProtectedRoute component={AdminDashboard} />}
                />
                <Route path="/not-authorized" element={<NotAuthorized />} />
                <Route path="pets/" element={<PetsList />} />
                {/*}  <Route path="admin/*" element={<AdminDashboard />} /> */}
            </Routes>
        </div>
    )
}

export default App
