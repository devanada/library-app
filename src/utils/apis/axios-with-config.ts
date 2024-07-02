import Cookies from "js-cookie";
import axios from "axios";

const axiosWithConfig = axios.create();
const token = Cookies.get("token") ?? "";

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = "https://hells-kitchen.onrender.com/api/v1";

  if (token !== "") {
    axiosConfig.headers.Authorization = `Bearer ${token}`;
  }

  return axiosConfig;
});

axiosWithConfig.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      Cookies.remove("token"); // TODO: Implemenet global state
      return;
    }

    return Promise.reject(error);
  }
);

export default axiosWithConfig;
