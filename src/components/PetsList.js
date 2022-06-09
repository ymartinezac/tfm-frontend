import { useAuth0 } from '@auth0/auth0-react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import React from 'react'
import PetService from '../services/pets'
function PetsList() {
    const ps = new PetService()
    const [pets, setPets] = React.useState([])
    const { getAccessTokenSilently } = useAuth0()

    React.useEffect(() => {
        ;(async () => {
            try {
                const token = await getAccessTokenSilently({
                    audience: 'https://tfm-backend.com',
                    scope: 'read:pets',
                })
                const response = await ps.getPets(token).then((res) => {
                    setPets(res.data)
                })
                setPets(await response.json())
            } catch (e) {
                console.error(e)
            }
        })()
    }, [getAccessTokenSilently])
    /* React.useEffect(() => {
        ps.getPets().then((res) => {
            setPets(res.data)
        })
    }, [])*/
    return (
        <div className="pets-list">
            {pets.map((pet) => (
                <Card sx={{ width: 325, height: 300 }} key={pet.name}>
                    <img
                        height="200"
                        width="100%"
                        src={process.env.REACT_APP_API_URL + pet.filename}
                        alt={pet.name}
                    />
                    <CardContent>
                        <h2>{pet.name}</h2>
                    </CardContent>
                    <CardActions>
                        <Button size="small" disabled>
                            Ver más
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default PetsList
