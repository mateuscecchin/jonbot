import axios from "axios";

export const api = axios.create({
  baseURL: "https://blackbot-api.vercel.app/",
});
