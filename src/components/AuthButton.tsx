import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './Login'
import LogoutButton from './Logout'

export const AuthButton = () => {
    const { isAuthenticated } = useAuth0()

    return <div>{isAuthenticated ? <LoginButton /> : <LogoutButton />}</div>
}
