import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:https://api.sandbox.v2.pedidopago.com.br/v2',
  headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
});

export default api;
