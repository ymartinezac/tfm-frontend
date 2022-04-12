

import { Route, Routes } from "react-router-dom";
import PetsList from "./PetsList";
import { UserMenu } from "./UserMenu";
function Home() {
  
    return (
        <div className="home">
            <header>
                <UserMenu />
                
            </header>
            <body>
                <Routes>
                    <Route path="pets" element={<PetsList />} />
                    <Route index element={<PetsList />} />
                </Routes>
            </body>
          
        </div>
    );
}

export default Home;
