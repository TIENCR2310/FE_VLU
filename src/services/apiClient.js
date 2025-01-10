import axios from 'axios';

const apiClient = axios.create({
    baseURL: "https://e1bd-2405-4802-80d6-6dd0-8daa-a2d8-50f0-cf30.ngrok-free.app", 
    headers: {
        "Content-Type": "application/json", 
        "ngrok-skip-browser-warning": "true", 
    },
});

export default apiClient;
               