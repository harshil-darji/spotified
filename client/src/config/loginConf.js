let client_id = "04e08c94991346ceb78ab20cbb0f1b10";
let redirect_uri = "http://localhost:3000";
let scope = "streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=${scope}`;

export default AUTH_URL;