// src/lib/apiClient.js
console.log("API BASE =", import.meta.env.VITE_API_BASE_URL);

import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 15000,
});

export default api;
