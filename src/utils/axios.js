import axios from 'axios';
export const dummyJsonAxios = axios.create({
  baseURL: 'https://dummyjson.com/',
  timeout: 1000
});
