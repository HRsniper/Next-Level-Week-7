import axios from "axios";

export const api = axios.create({
  // baseURL: "http://192.168.100.103:4000"
  baseURL: "http://localhost:4000"
});
