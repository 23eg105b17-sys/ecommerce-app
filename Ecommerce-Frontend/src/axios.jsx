import axios from 'axios';
const API = axios.create({
  baseURL: 'https://ecommerce-backend-sod2.onrender.com/api',
});
delete API.defaults.headers.common['Authorization'];
export default API;
