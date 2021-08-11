# Spotified

![spotified](https://user-images.githubusercontent.com/41537302/114931668-60b0b180-9deb-11eb-89b5-8ed406f01e9c.png)

## Search and Play songs on Spotify

Spotified uses the Spotify api. To use the app, edit a ```.env.example``` file in both client and server folders and rename it to `.env`. It has to include below mentioned parameters respectively.:

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
