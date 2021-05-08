import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json"
  }
});


 //api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;
//"Authorization": `Bearer ${JSON.parse(token)}`
/*
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080'
})
export default api;

*/