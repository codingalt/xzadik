import axios from "axios";

axios.defaults.withCredentials = true

const API = axios.create({
  withCredentials:true,
  baseURL: process.env.REACT_APP_URI,
});

export default API;