import axios from "axios";

const baseURL = "https://api.coinfirm.com/v3";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  config.headers[
    "Authorization"
  ] = `Bearer ${process.env.NEXT_PUBLIC_COINFIRM}`;

  return config;
});

export default api;
