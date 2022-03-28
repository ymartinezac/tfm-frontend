

import { AdminMenu } from "./AdminMenu";
import PetsTable from "./PetsTable";
function AdminDashboard() {
    return (
        <div className="admin-dashboard">
            <header>
                <AdminMenu />
            </header>
            <body>
                <PetsTable />
            </body>
          
        </div>
    );
}

export default AdminDashboard;
