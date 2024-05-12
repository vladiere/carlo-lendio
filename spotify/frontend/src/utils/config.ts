// Spotify
const CLIENT_ID = '4871b59efd5449328229b5e6b51bc393';
const CLIENT_SECRET = 'efcc186afead49b58c7ea5a8d6610bc3';
const REDIRECT_URI = 'http://localhost:3000';
const AUTH_URL = 'https://accounts.spotify.com/authorize';

const URI = `${AUTH_URL}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

const SPOTIFY_API = {
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
  redirect_uri: REDIRECT_URI,
  auth_url: AUTH_URL,
  uri: URI,
}

const config = {
  spotify: SPOTIFY_API,
}

export default config;
