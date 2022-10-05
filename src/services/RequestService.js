import Auth from './AuthService';

class Request {
  constructor() {
    this.tokenRefreshed = false;
    this.API_URL = 'http://26.133.205.231:8000/api/v1';
  }
  request(method, URL, body) {
    return fetch(this.API_URL + URL, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access')}`,
      },
      body: JSON.stringify(body),
    });
  }

  statusChecker(status) {
    if (status >= 400 && status <= 599) {
      throw (new Error().message = status);
    }
  }

  async get(path) {
    try {
      let response = await this.request('GET', path);
      this.statusChecker(response.status);
      return await response.json();
    } catch (e) {
      if (e === 401) {
        if (this.tokenRefreshed) {
          Auth.logout();
        } else {
          this.tokenRefreshed = true;
          Auth.refreshToken();
          this.get(path);
        }
      }
    }
  }

  async post(path, body) {
    try {
      let response = await this.request('POST', path, body);
      this.statusChecker(response.status);
      return await response.json();
    } catch (e) {
      if (e === 401) {
        if (this.tokenRefreshed) {
          Auth.logout();
        } else {
          this.tokenRefreshed = true;
          Auth.refreshToken();
          this.get(path);
        }
      }
    }
  }

  async put(path, body) {
    try {
      let response = await this.request('PUT', path, body);
      this.statusChecker(response.status);
      return await response.json();
    } catch (e) {
      if (e === 401) {
        if (this.tokenRefreshed) {
          Auth.logout();
        } else {
          this.tokenRefreshed = true;
          Auth.refreshToken();
          this.get(path);
        }
      }
    }
  }

  async del(path, body) {
    try {
      let response = await this.request('DELETE', path, body);
      this.statusChecker(response.status);
      return await response.json();
    } catch (e) {
      if (e === 401) {
        if (this.tokenRefreshed) {
          Auth.logout();
        } else {
          this.tokenRefreshed = true;
          Auth.refreshToken();
          this.get(path);
        }
      }
    }
  }
}

export default new Request();
