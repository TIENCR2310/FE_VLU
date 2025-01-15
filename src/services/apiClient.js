import axios from 'axios';

const apiClient = axios.create({
    baseURL: " https://cc93-2405-4802-815e-e440-a910-e597-4c20-64a.ngrok-free.app", 
    headers: {
        "Content-Type": "application/json", 
        "ngrok-skip-browser-warning": "true", 
    },
});

export default apiClient;
               
