import { useAuth0 } from "@auth0/auth0-react";
import { React } from "react";
export const Profile = () => {
    const { user } = useAuth0();

    return (
        <div>
            <p>skdchb</p>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            {console.log(user)}
            <p>{user.email}</p>
        </div>
    );
};
