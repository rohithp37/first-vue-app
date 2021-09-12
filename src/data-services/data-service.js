import axios from 'axios';
const baseUrl = 'https://jsonplaceholder.typicode.com/';

export const getDataRequest = (params) => {
    let url = baseUrl + params;
    return axios.get(url)
    .then(res => res)
    .catch(err => err);
}