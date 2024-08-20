import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'https://api-cgn.cypheryard.com',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default customAxios;