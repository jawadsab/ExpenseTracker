import api from "./api"

const setAuthToken = (token) => {
    if (token) {
      console.log("I have token");
      localStorage.setItem("token", token);
      api.defaults.headers.common = {"Authorization":`Bearer ${token}`}
    } else {
      console.log("I dont have have token");

      delete api.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  };
  
  export default setAuthToken;