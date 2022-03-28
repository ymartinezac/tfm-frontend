import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL + "pets/";


export default class PetService {
    
    getPets() {
      /*const config = {
        Authorization: `Bearer ${token}`
    }*/
        return axios.get(baseURL);
    }

  /*  getPetById(id) {
      /*const config = {     
            headers: { 
                Authorization: `Bearer ${token}`
             }
        }
        return axios.get(baseURL + "email/" + email, config);
    }*/
}