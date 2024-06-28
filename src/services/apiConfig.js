import axios from "axios";

const BASE_URL = "https://instagram-clone-be-bc40c4e1de37.herokuapp.com/";

const axiosInstance = axios.create({ baseURL: BASE_URL });

export default axiosInstance;

axiosInstance.interceptors.request.use((req) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }
  return req;
});
