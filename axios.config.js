import axios from 'axios';

const baseURL = process.env.API_URL;

const axiosClient = axios.create({
  baseURL,
  headers: {
    'x-text-header': 'test',
  },
});

export default axiosClient;