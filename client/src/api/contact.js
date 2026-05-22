import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
});

export const submitContactMessage = async (formData) => {
  const response = await api.post('/contact', formData);
  return response.data;
};
