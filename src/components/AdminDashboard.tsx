import { Route, Routes } from 'react-router-dom'
import PetsTable from './PetsTable'
function AdminDashboard() {
    return (
        <div className="admin-dashboard">
            <header></header>
            <>
                <Routes>
                    <Route path="pets" element={<PetsTable />} />
                </Routes>
            </>
        </div>
    )
}

export default AdminDashboard
