import axios from 'axios';

const BASE_URL = process.env.BASE_URL;
const axiosApi = (baseURL: string | undefined) => axios.create({ baseURL });
const axiosInstance = axiosApi(BASE_URL);
export default axiosInstance;
