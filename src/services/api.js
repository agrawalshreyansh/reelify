
import ApiService from './ApiService.js';

export const fetchData = (endpoint, withCredentials = false) => ApiService.fetchData(endpoint, withCredentials);
export const postData = (endpoint, body, withCredentials = false) => ApiService.postData(endpoint, body, withCredentials);
