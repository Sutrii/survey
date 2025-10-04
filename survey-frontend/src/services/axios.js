import axios from "axios";
import router from "./router.jsx";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

const Axios = axios.create({
  baseURL: `${baseURL}/api`
})

// set requests' header authorization token
Axios.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('TOKEN')}`;
  return config;
})

// Handle Unauthorized requests
Axios.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('TOKEN');
    router.navigate("/login", {replace: true});
    return error;
  }
  throw error;
})

export default Axios;
