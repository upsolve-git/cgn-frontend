import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'https://api-cgn.cypheryard.com',
  // baseURL: 'http://localhost:8000',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default customAxios;