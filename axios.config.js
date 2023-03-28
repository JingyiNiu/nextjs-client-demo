import axios from "axios"
import API_BASE_URL from "./utils/utils"

const axiosClient = axios.create({
  API_BASE_URL,
  headers: {
    'x-text-header': 'test',
  },
});

export default axiosClient;