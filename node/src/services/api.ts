import axios from "axios";
import { env } from "../utils/env.example";

export const api = axios.create({
  baseURL: env.HOSTNAME
});
