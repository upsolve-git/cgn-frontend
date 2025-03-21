import axios from 'axios';

const customAxios = axios.create({
  // baseURL: 'https://api.canadiangelnails.com',
  baseURL: 'http://localhost:8000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default customAxios;
