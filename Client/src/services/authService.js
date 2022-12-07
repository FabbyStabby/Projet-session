import axios from 'redaxios';

export async function loginAuth(username, password) {
  if (username && password) {
    
    return axios.post('http://localhost:3000/users/login', {
      username,
      password
    });
  }
  throw new Error("No username or password inputed.");
}


