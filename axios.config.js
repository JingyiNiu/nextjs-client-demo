import axios from "axios"

const baseURL = process.env.NEXT_PUBLIC_API_URL
const axiosClient = axios.create({
  baseURL,
  headers: {
    'x-text-header': 'test',
  },
});

export default axiosClient;