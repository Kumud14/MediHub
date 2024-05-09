import axios from "axios";

const api = axios.create({
    baseURL: "https://medihub-qrmn.onrender.com/api/v1",

})

export default api;