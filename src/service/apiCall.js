import axios from "axios";

export const message = async (message) => {
    const response = await axios.post("http://localhost:8000/mensajes", message);
    return response.data;
}


export const login = async (user) => {
    const response = await axios.post("http://localhost:8000/users/login", user);
    return response.data;
}


export const register = async (user) => {
    const response = await axios.post("http://localhost:8000/users/register", user);
    return response.data;
}