const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '04e08c94991346ceb78ab20cbb0f1b10',
        clientSecret: '79529f8477e14fcab63007b911114d65'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch((err) => {
        console.log('bbbbb')
        console.log(err);
        res.sendStatus(400);
    })
})

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;

    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '04e08c94991346ceb78ab20cbb0f1b10',
        clientSecret: '79529f8477e14fcab63007b911114d65',
        refreshToken
    })

    spotifyApi.refreshAccessToken().then((data) => {
        res.json({
            accessToken: data.access_token,
            expiresIn: data.expires_in
        })
    }).catch(err => {
        console.log('aaaaaaa')
        console.log(err);
        res.sendStatus(400);
    })
})

app.listen(3001)