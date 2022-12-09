import axios from 'redaxios';

export const registerUserService = async (data) => {
    return axios.post('http://localhost:3000/users/new', data);
}

export const getTimeService = async (date) => {
    const params = {
        date
    }
    return axios.get('http://localhost:3000/rendezVousDispo', { params });
}

export const postReserverRendezVous = async (data) => {
    return axios.post('http://localhost:3000/rendezVous/new', data);
}

export const putUpdateRendezVousDispo = async (data) => {
    return axios.put('http://localhost:3000/rendezVousDispo/updateAvailable', data);
}

export const deleteAnnulerRendezVous = async (username) => {
    const params = {
        username
    }
    return axios.delete('http://localhost:3000/rendezVous/delete', { params });
}

export const getRendezVous = async (username) => {
    const params = {
        username
    }
    return axios.get('http://localhost:3000/rendezVous', { params })
}
