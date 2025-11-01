import axios from "axios";

const API_BASE = import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:5000";


const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true, // To send cookies if backend uses sessions
});

export const registerUser = (data) => api.post("/auth/register", data);
export const loginUser = (data) => api.post("/auth/login", data);
export const logoutUser = () => api.post("/auth/logout");

export const saveResume = (data) => api.post("/resume", data);
export const getResume = (id) => api.get(`/resume/${id}`);
export const getUserResumes = () => api.get("/resume/my");

export default api;
