import axios from "axios";

export const apiKey = import.meta.env.VITE_API_KEY;

export const api = axios.create({
    baseURL: import.meta.env.VITE_API
})

export const search = axios.create({
    baseURL: import.meta.env.VITE_SEARCH
})