import axios from "axios";

export const base_url = "https://api.mangadex.org/";

export const axiosInstance = axios.create({ baseURL: process.env.BASE_URL });
