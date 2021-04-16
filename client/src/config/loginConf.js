let client_id = process.env.REACT_APP_CLIENT_ID;
let redirect_uri = process.env.REACT_APP_REDIRECT_URI;
let scope = "streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=${scope}`;

export default AUTH_URL;