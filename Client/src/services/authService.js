import axios from 'redaxios';

export async function loginAuth(username, password) {
  if (username && password) {
    const mockUserInfoRes = {
      data: {
        name: 'Marko',
        telephone: '5141234567',
        email: '123@123.com'
      }
    }
    return new Promise((resolve) => {
      resolve(mockUserInfoRes);
    });
    
    return axios.post('https://localhost:8080/api/v1/login', { body: {
      username,
      password,
    }});
  }
  throw new Error("No username or password inputed.");
}

export async function getUserInfo() {
  axios.post('https://localhost:8080/api/v1/getUser', {

  }).then((res) => {

  }, (err) => {

  })
}
