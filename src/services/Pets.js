import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL + "pets/";


export default class PetService {
    
    getPets() {
      /*const config = {
        Authorization: `Bearer ${token}`
    }*/
        return axios.get(baseURL);
    }

    addPet(body){
        const config = {     
            headers: { 
                'content-type': 'multipart/form-data'
             }
        }
        return axios.post(baseURL , body, config);
    }
    getPetById(id) {
      /*const config = {     
            headers: { 
                Authorization: `Bearer ${token}`
             }
        }*/
        return axios.get(baseURL + id);
    }

    deletePetById(id) {
        /*const config = {     
              headers: { 
                  Authorization: `Bearer ${token}`
               }
          }*/
          return axios.delete(baseURL + id);
      }

      putPet(id, body) {
        const config = {     
            headers: { 
                'content-type': 'multipart/form-data'
             }
        }
        return axios.put(baseURL + id , body, config);
      }
}