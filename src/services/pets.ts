import axios from 'axios'
import Pet from '../models/pet.interface'
const baseURL = process.env.REACT_APP_API_URL + 'pets/'

export default class PetService {
    getPets() {
        return axios.get(baseURL)
    }

    addPet(body: Pet, token: string) {
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: `Bearer ${token}`,
            },
        }
        return axios.post(baseURL, body, config)
    }

    getPetById(id: string) {
        return axios.get(baseURL + id)
    }

    deletePetById(id: string, token: string) {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        return axios.delete(baseURL + id, config)
    }

    putPet(id: string, body: Pet) {
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        }
        return axios.put(baseURL + id, body, config)
    }
}
