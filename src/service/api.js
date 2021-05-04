/*
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
    "Authorization": `Bearer ${JSON.parse(token)}`
  }
});
 //api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;
*/

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080'
})
export default api;
