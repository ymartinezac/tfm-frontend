import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0()
    React.useEffect(() => {
        console.log('🚀 ~ file: Profile.tsx ~ line 23 ~ Profile ~ user', user)
    }, [])
    if (isLoading) {
        return <div>Loading ...</div>
    }

    return (
        <>
            {isAuthenticated && (
                <div>
                    <img src={user?.picture} alt={user?.name} />
                    <h2>{user?.name}</h2>
                    <p>{user?.email}</p>
                </div>
            )}
        </>
    )
}

export default Profile
