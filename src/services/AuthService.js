import Request from './RequestService';

export default class Auth {
  static async login(username = 'mazde', password = 'mazdemazde') {
    const res = await Request.post('/login/', { username: username, password: password });
    if (res) {
      localStorage.setItem('access', res.access);
      localStorage.setItem('refresh', res.refresh);
      return true;
    } else {
      return false;
    }
  }

  async checkToken(token) {
    // доделать
    return await Request.post('/check-token/', { token });
  }

  static refreshToken() {
    Request.post('/refresh-token/', {
      refresh: localStorage.getItem('refresh'),
    });
  }

  async register(username, email, password) {
    // доделать
    return await Request.post('/register/', {
      username: username,
      email: email,
      password: password,
    });
  }
}
