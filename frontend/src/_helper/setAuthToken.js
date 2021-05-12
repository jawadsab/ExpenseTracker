import api from "./api"

const setAuthToken = (token) => {
    if (token) {
     
      localStorage.setItem("token", token);
      api.defaults.headers.common = {"Authorization":`Bearer ${token}`}
    } else {
   

      delete api.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  };
  
  export default setAuthToken;