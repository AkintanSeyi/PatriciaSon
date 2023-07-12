


import axios from "axios"

const API = axios.create({baseURL: "http://localhost:5000"});




export const signIn = (formData) => API.post(`/user/signIn` , formData);
export const signUp = (formData) => API.post(`/user/signUp` , formData);
export const exerciseDetail = () => API.get(`/exercise` );
export const exerciseIndividualDetail = (id) => API.get(`/exercise/${id}`  );