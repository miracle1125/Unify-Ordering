import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Accept: 'application/json'
  },
});

export default api;
