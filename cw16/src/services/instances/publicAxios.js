import axios from 'axios';

const PublicAxios = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
});

export default PublicAxios;
