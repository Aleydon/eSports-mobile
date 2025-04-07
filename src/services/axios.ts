import axios from 'axios';

export const api = axios.create({
  // Set your ip here
  baseURL: 'http://192.168.18.173:3333'
});
