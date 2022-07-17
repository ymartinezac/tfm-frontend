import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import { UserMenu } from './components/UserMenu'
function App() {
    return (
        <div className="App">
            <UserMenu />
            <Routes>
                <Route index element={<Home />} />
                {/*} <Route path="pets/" element={<PetsList />} />
                <Route path="admin/*" element={<AdminDashboard />} /> */}
            </Routes>
        </div>
    )
}

export default App
