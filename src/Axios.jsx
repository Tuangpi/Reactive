import Axios from "axios";

const BASEURL = "https://theaudiodb.com/api/v1/json/2/";

const axiosInstance = Axios.create({
  baseURL: BASEURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    //Add authorization token if available
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Handle known error responses (e.g., 401, 403, 500)
      console.error("API Error:", error.response.status, error.response.data);
    } else {
      console.error("Network or Server Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
