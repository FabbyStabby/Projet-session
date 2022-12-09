import axios from 'redaxios';

export const registerUserService = (data) => {
    return axios.post('http://localhost:3000/users/new', data)
}

export const getTimeService = (date) => {
    const params = {
        date
    }
    return axios.get('http://localhost:3000/rendezVousDispo', { params })
}

export const postReserverRendezVous = (data) => {
    return axios.post('http://localhost:3000/rendezVous/new', data)
}

export const putUpdateRendezVousDispo = (data) => {
    return axios.put('http://localhost:3000/rendezVousDispo/updateAvailable', data)
}