import axios from 'axios';


const apiURL = import.meta.env.VITE_API_URL;
const http = axios.create({
    baseURL: apiURL
});

http.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
);

export default http;