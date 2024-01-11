import axios from "axios";


export const imageUrl = import.meta.env.VITE_IMG;
export const search = import.meta.env.VITE_SEARCH;
export const apiKey = import.meta.env.VITE_API_KEY;

export const api = axios.create({
    baseURL: import.meta.env.VITE_API
})