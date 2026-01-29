import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5002/api", // make sure backend port matches
});

// ✅ Use correct header key "Authorization"
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("adminToken"); // previously "token"
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// });

export default API;
