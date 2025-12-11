import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL ?? "http://localhost:5000/api";

const client = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" }
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem("tm_token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default client;
