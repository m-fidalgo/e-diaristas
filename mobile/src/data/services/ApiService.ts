import axios from 'axios';

const url = 'https://e-diaristas-mf.herokuapp.com';

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
});
