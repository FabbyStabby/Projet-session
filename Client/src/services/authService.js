import axios from 'redaxios';

export async function login(username, password) {
  if (username && password) {
    axios.post('https://localhost:8080/api/v1/login', {

    }).then((res) => {
      // dosoemthing 
      // or return sometihng
    }, (err) => {

    })
  }

  return {
    error: 'Missing Info'
  }
}