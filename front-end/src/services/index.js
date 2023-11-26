import axios from 'axios';
// import { BASE_URL } from 'env';
import queryString from 'query-string';
export * from './product';

export const URL_ROOT = 'https://ecommerce-api-mzbr.onrender.com/api';

export const axiosClient = axios.create({
  baseURL: 'https://ecommerce-api-mzbr.onrender.com/api',
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json'

    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Credentials': true
  },
  paramsSerializer: (params) => {
    console.log(params);
    queryString.stringify(params, {
      encode: false
    });
  }
});

axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('accessToken');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);
