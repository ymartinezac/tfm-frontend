import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL + 'pets/'

export default class PetService {
    getPets(token) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }
        return axios.get(baseURL, config)
    }

    addPet(body) {
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        }
        return axios.post(baseURL, body, config)
    }
    getPetById(id) {
        /*const config = {     
            headers: { 
                Authorization: `Bearer ${token}`
             }
        }*/
        return axios.get(baseURL + id)
    }

    deletePetById(id) {
        /*const config = {     
              headers: { 
                  Authorization: `Bearer ${token}`
               }
          }*/
        return axios.delete(baseURL + id)
    }

    putPet(id, body) {
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        }
        return axios.put(baseURL + id, body, config)
    }
}
