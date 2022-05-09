import { Route, Routes } from 'react-router-dom'
import PetsTable from './PetsTable'
function AdminDashboard() {
    return (
        <div className="admin-dashboard">
            <header></header>
            <body>
                <Routes>
                    <Route path="pets" element={<PetsTable />} />
                </Routes>
            </body>
        </div>
    )
}

export default AdminDashboard
