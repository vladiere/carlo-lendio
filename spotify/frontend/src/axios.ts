import axios from 'axios';
import { useAuthStore } from './stores/auth.store';

// axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3010';


const refreshToken = async () => {
  try {
    const auth = useAuthStore();
    const response = await axios.post('/api/refresh', { refreshToken: auth.refresh_token });

    return response.data;
  } catch (error) {
    throw error;
  }
}

const refreshTokenSpotify = async () => {
  try {
    const auth = useAuthStore();
    const response = await axios.post('/api/spotify/refresh', { refreshToken: auth.spotify_refresh });

    return response.data;
  } catch (error) {
    throw error;
  }
}

axios.interceptors.response.use(response => response, async (error) => {
  const auth = useAuthStore();
  const preUrl = error?.config.url;
  const prevReq = error?.config;
  
  if (error?.response.status === 401 && !prevReq?.sent) {
    prevReq.sent = true;

    let token: any = undefined;

    if (preUrl.split('/').indexOf('spotify') !== -1) {
      token = await refreshTokenSpotify();
      auth.refreshedSpotifyAccessToken(token)
    } else {
      token = await refreshToken();
      auth.refreshedAccessToken(token.accessToken);
    }

    if (token.accessToken) {
      prevReq.headers['Authorization'] = `Bearer ${token.accessToken}`;

      return axios(prevReq);
    } else {
      return Promise.reject(error);
    }
  }
  return Promise.reject(error);
})
