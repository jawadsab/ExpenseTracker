import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signup = async (authData) => {
  try {
    const response = await api.post('/user/signup', authData);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const signin = async (authData) => {
    try {
        const response = await api.post("/user/signin",authData);
        return response;
    } catch (error) {
        return error.response;
    }
}

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return token ? true : false;
}