import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import { ComponentType, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
interface ProtectedRouteProps {
    component: ComponentType
}
export const AdminProtectedRoute: React.FC<ProtectedRouteProps> = ({ component }) => {
    const { getIdTokenClaims } = useAuth0()
    const [isAuthorized, setIsAuthorized] = useState(false)
    let navigate = useNavigate()
    useEffect(() => {
        async function getRoles(): Promise<Array<string>> {
            const roleClaimType = 'https://yeseniatfm.com/roles'
            const claims = await getIdTokenClaims()
            if (claims) return claims[roleClaimType]
            else return []
        }
        async function checkRoles(role: string) {
            const roles = await getRoles()
            console.log('🚀 ~ file: AdminProtectedRoute.tsx ~ line 20 ~ checkRoles ~ roles', roles)
            const isAuthorized = roles.includes(role)
            console.log(
                '🚀 ~ file: AdminProtectedRoute.tsx ~ line 21 ~ checkRoles ~ isAuthorized',
                isAuthorized
            )
            if (isAuthorized) setIsAuthorized(true)
            else navigate('../not-authorized', { replace: true })
        }
        checkRoles('admin')
    })
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => <p>Loading...</p>,
    })

    return <Component />
}
