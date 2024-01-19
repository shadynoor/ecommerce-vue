import axios from "axios";

const axiosClient = axios.create({
  baseURL: "../back/",
});

export default axiosClient;
