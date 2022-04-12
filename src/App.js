import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./components/AdminDashboard";
import Home from "./components/Home";

function App() {
    return (
       
        <main className="App">
            <Routes>
                <Route index element={<Home />} />
                <Route path="home/*" element={<Home />} />
                <Route path="/*" element={<Home />} />
                <Route path="admin/*" element={<AdminDashboard />} />
                    
                
            </Routes>
            
            
          
        </main>
       
    );
}

export default App;
