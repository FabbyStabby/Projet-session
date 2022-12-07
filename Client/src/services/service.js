import axios from 'redaxios';

export const registerService = (data) => {
    return axios.post('http://localhost:3000/users/new', data)
}