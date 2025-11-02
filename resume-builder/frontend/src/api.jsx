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
// import axios from "axios";

// // NEW (correct for Vite/frontends)
// const API_BASE = import.meta.env.VITE_REACT_APP_API_URL || "https://resumebuilderapp2.onrender.com";

// const api = axios.create({
//   baseURL: API_BASE,
//   withCredentials: true, // To send cookies if backend uses sessions
// });

// // Auth APIs
// export const registerUser = (data) => api.post("/auth/register", data);
// export const loginUser = (data) => api.post("/auth/login", data);
// export const logoutUser = () => api.post("/auth/logout");

// // Resume APIs
// export const saveResume = (data) => api.post("/resume", data);
// // This is for private resume by id (not public sharing!)
// // If you want to keep this, rename to getPrivateResume or similar.
// export const getResume = (id) => api.get(`/resume/${id}`);
// export const getUserResumes = () => api.get("/resume/my");

// // *** NEW: Public resume fetch ***
// export const getPublicResume = (publicId) => api.get(`/resume/public/${publicId}`);

// export default api;
