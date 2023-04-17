export interface AuthStorage {
  setToken(data?: any): void;
  getToken(): void;
  removeToken(): void;
}

export class AuthStorageService implements AuthStorage {
  ACCESS_TOKEN = 'token';

  setToken(token?: any) {
    if (token) {
      window.localStorage.setItem(this.ACCESS_TOKEN, token);
    }
  }

  getToken() {
    return window.localStorage.getItem(this.ACCESS_TOKEN);
  }

  removeToken() {
    window.localStorage.removeItem(this.ACCESS_TOKEN);
  }
}
