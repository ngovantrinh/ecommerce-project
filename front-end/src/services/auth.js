import { axiosClient } from '.';

class AuthService {
  static signUp({ username, password }) {
    let url = '/register';
    return axiosClient.post(url, {
      username,
      password
    });
  }
}

export default AuthService;
