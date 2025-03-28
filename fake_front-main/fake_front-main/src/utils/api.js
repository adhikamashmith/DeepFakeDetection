// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 30000,
});

export const analyzeVideo = async (formData) => {
  return api.post('/analyze/video', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const verifyContent = async (input) => {
  return api.post('/api/verify', { input });
};