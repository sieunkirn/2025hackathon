// // src/lib/apiClient.js
// console.log("API BASE =", import.meta.env.VITE_API_BASE_URL);

// import axios from 'axios';

// const api = axios.create({
//     baseURL: import.meta.env.VITE_API_BASE_URL,
//     timeout: 15000,
// });

// export default api;
// src/lib/apiClient.js
import axios from 'axios';

const api = axios.create({
  baseURL: window.location.hostname.includes("vercel.app")
    ? "https://d32cc7c8eb4b.ngrok-free.app" // 배포일 때
    : "http://localhost:8080",              // 로컬일 때
  timeout: 15000,
});

console.log("API BASE =", api.defaults.baseURL);

export default api;
