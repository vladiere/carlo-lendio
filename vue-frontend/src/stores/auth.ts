import { defineStore } from 'pinia';
import axios from 'axios';
// import RegisterRequest from '../types/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    auth: false,
  }),
  getters: {
    isAuthenticated: (state) => state.auth
  },
  actions: {
    setAuthenticated() {
      this.auth = true;
    },
    async getToken() {
      await axios.get('/sanctum/csrf-cookie');
    },
    async handleLogin(data: { email: string, password: string}) {
      await axios.post('/login', data)
      this.setAuthenticated();
    },
    async handleRegister(data: { fullname: string, email: string, password: string, password_confirmation: string }) {
      await axios.post('/register', data)
      this.setAuthenticated();
    },
    async handleLogout() {
      await axios.post('/logout');
      this.auth = false;
    }
  },
  persist: true,
})
