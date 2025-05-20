
import axios from "axios";
import { getToken } from "../utils/cookie"; 

const baseURL = import.meta.env.VITE_BASE_URL;

const request = axios.create({
  baseURL,
  timeout: 10000,
});

request.interceptors.request.use((config) => {
  const token = getToken(); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

request.interceptors.response.use(
  (response) => response.data, 
  (error) => {
    console.error("Error:", error.response?.data?.message || error.message);
    return Promise.reject(error);
  }
);

export default request;
