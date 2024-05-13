import { defineStore } from 'pinia';
import axios from 'axios';
import { useSocketStore } from '../stores/socket.store';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user_id: 0,
    refresh_token: '',
    access_token: '',
    spotify_refresh: '',
    spotify_access: '',
    expires_in: 0,
    auth: false,
  }),
  getters: {
    isAuthenticated: (state) => state.auth,
    getAccessToken: (state) => state.access_token,
    getRefreshToken: (state) => state.refresh_token,
    getSpotifyRefresh: (state) => state.spotify_refresh,
    getSpotifyAccess: (state) => state.spotify_access,
  },
  actions: {
    refreshedSpotifyAccessToken(data: { accessToken: string, expiresIn: number }) {
      this.spotify_access = data.accessToken;
      this.expires_in = data.expiresIn;
    },
    refreshedAccessToken(token: string) {
      this.access_token = token;
    },
    setAuthenticated(data: { id: number, accessToken: string, refreshToken: string }) {
      this.auth = true;
      this.user_id = data.user_id;
      this.refresh_token = data.refreshToken;
      this.access_token = data.accessToken;
    },
    async handleLoginSpotify(code: string) {
      const response = await axios.post('/api/spotify/login', { code });

      this.spotify_refresh = response.data.refreshToken;
      this.spotify_access = response.data.accessToken;
      this.expires_in = response.data.expiresIn;
    },
    async handleLogin(data: { username: string, password: string}) {
      try {
        if (data.username === '') {
           return {
            msg: 'Username is required',
            stats: 0,
          };         
        } else if (data.password === '') {
           return {
            msg: 'Password is required',
            stats: 0,
          };         
        }

        const response = await axios.post('/api/login', data)
        const res = await axios.get('/api/spotify/');

        this.setAuthenticated(response.data.user);
        return {
          msg: 'success',
          spotify: res.data.authorizeURL,
          stats: 1,
        };
      } catch (error) {
        return {
          msg: error.response.data.error, stats: 0 
        };
      }
    },
    async handleRegister(data: { fullname: string, username: string, password: string }) {

      try {
        await axios.post('/api/register', data)
        return {
          msg: 'success',
          stats: 1,
        };
      } catch (error) {
        return {
          msg: error.response.data.error, stats: 0 
        };
      }
    },
    async handleLogout() {
      const socketStore = useSocketStore();

      await axios.post('/api/logout', { refreshToken: this.getRefreshToken });
      socketStore.removeSocketId();
      this.auth = false;
      this.user_id = 0;
      this.refresh_token = '';
      this.access_token = '';
      this.spotify_access = '';
      this.spotify_refresh = '';
      this.expires_in = 0;
    }
  },
  persist: {
    storae: localStorage,
  }
})
