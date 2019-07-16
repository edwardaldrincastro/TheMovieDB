import axios from 'axios';

export let API_V1 = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  responseType: 'json'
});
