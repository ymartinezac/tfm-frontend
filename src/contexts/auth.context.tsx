import { Auth0Provider } from '@auth0/auth0-react'
import Props from '../models/props.interface'

const Auth0ProviderContext = ({ children }: Props) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
    const audience = process.env.REACT_APP_AUTH0_AUDIENCE
    const scope = process.env.REACT_APP_AUTH0_SCOPE

    return (
        <Auth0Provider
            domain={domain || ''}
            clientId={clientId || ''}
            redirectUri={window.location.origin}
            scope={scope}
            audience={audience}
        >
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderContext
