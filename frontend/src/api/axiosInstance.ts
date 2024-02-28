import axios from "axios";


// Create an Axios instance with default options
const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_BASE_URL,
  withCredentials: true,
});

export default axiosInstance;