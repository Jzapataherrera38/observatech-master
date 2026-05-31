import axios from "axios";

// baseURL relativa: usa el proxy configurado en vite.config.js
const API = axios.create({
  baseURL: "/api",
});

export const getNarrativas   = () => API.get("/narrativas");
export const getUsuarios     = () => API.get("/usuarios");
export const getEvaluaciones = () => API.get("/evaluaciones");
export const loginUser       = (data) => API.post("/login", data);

export default API;

