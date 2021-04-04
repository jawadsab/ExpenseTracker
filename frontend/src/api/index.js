import axios from "axios";


const api = axios.create({
    baseURL:"http://localhost:5000/api/v1",
    headers:{
        "Content-Type":"application/json"
    }
});


export const  signup = async (authData) => {
   
    
    try {
         const response = await api.post("/user/signup",authData);
        return response;
    } catch (error) {
        return error.response;
    }

}