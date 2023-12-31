import axios from "axios";

const API = axios.create({ baseURL: "https://bdu-app-server-api.onrender.com" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const getUser = (userId) => API.get(`/user/${userId}`);
export const updateUser = (id, formData) =>  API.put(`/user/${id}`, formData);
export const getAllUser = ()=> API.get('/user')
export const followUser = (id,data)=> API.put(`/user/${id}/follow`, data)
export const unfollowUser = (id, data)=> API.put(`/user/${id}/unfollow`, data)
export const updateUserStatusByAdmin = (adminId, userData)=> API.put(`/user/${adminId}/updateStatus`, userData);
export const updateIsPsychiatristStatusByAdmin = (adminId, userData) =>API.put(`/user/${adminId}/updatePsychiatricStatus`, userData)
export const deleteUser = (adminId, userId) => API.delete(`/user/${adminId}/${userId}/delete`)