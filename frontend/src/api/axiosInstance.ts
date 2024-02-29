import axios from "axios";


// Create an Axios instance with default options
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  withCredentials: true,
});

export default axiosInstance;