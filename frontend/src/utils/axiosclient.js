import axios from 'axios';

const axiosclient = axios.create({
    baseURL: 'https://gamemerchstore-api.onrender.com'
  });

  axiosclient.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

export default axiosclient


