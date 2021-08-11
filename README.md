# Spotified

## Search and Play songs on Spotify

Spotified lets you play Spotify on your signed in devices and shows the lyrics of currently playing song. Sign in with your Spotify credentials and enjoy!

![spotified](https://user-images.githubusercontent.com/41537302/129008458-b7e013a3-b659-4d4a-8cd0-8adfb555653d.gif)


## Configuration

Spotified uses the Spotify api. The client and server both need to be configured before starting. 

To use the app, edit a ```.env.example``` file in both client and server folders and rename it to `.env`. It has to include below mentioned parameters respectively.:

- <strong>Client</strong>
```
REACT_APP_SERVER_HOST_URL=
REACT_APP_CLIENT_ID=
REACT_APP_REDIRECT_URI=
```

- <strong>Server</strong>
```
REACT_APP_CLIENT_ID=
REACT_APP_CLIENT_SECRET=
REACT_APP_REDIRECT_URI=
```
<strong>NOTE:</strong> Please make sure the `REACT_APP_REDIRECT_URI` is same as mentioned inside Spotify Dashboard. For eg. `http://localhost:3000`.

Later, use ```npm start``` in both the client and server folders to bootstrap the website.
