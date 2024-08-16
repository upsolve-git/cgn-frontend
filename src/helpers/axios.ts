import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'http://cgn-backend-env.eba-z3futxbr.ap-south-1.elasticbeanstalk.com',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default customAxios;