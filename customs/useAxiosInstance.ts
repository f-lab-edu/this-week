import axios from 'axios';

const useAxiosInstance = () => {
  axios.defaults.baseURL = process.env.BASE_URL;
};

export default useAxiosInstance;
