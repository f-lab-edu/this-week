import axios from 'axios';

// Todo: .env 작동 안하는 거 수정
// const BASE_URL = process.env.BASE_URL;
const axiosApi = (baseURL: string | undefined) => axios.create({ baseURL });
const axiosInstance = axiosApi('http://localhost:1337');
export default axiosInstance;
