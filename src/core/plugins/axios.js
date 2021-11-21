import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = `http://localhost:8000/api/`;
axiosInstance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

axiosInstance.defaults.headers.common["Content-Type"] = "application/json";

axiosInstance.interceptors.response.use(null, (error) => {
  if (error.response.status == 401) {
    store.commit("logout");
  }
  return Promise.reject(error);
});

export default axiosInstance;
