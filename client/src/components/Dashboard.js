import React, { useState, useEffect } from 'react'
import useAuth from '../config/useAuth'
import { Container, Form } from 'react-bootstrap'
import SpotifyWebApi from 'spotify-web-api-node'
import Track from './Track'
import Player from './Player'

const spotifyApi = new SpotifyWebApi({
    clientId: "04e08c94991346ceb78ab20cbb0f1b10"
})

export default function Dashboard({ code }) {
    const accessToken = useAuth(code)
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [currentTrack, setCurrentTrack] = useState()

    function chooseTrack(track) {
        setCurrentTrack(track)
        setSearch('')
    }

    useEffect(() => {
        if (!accessToken)
            return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search)
            return setSearchResults([])
        if (!accessToken)
            return

        let cancel = false
        spotifyApi.searchTracks(search).then(res => {
            if (cancel)
                return
            setSearchResults(res.body.tracks.items.map(track => {
                const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
                    if (image.height < smallest.height) return image
                    return smallest
                }, track.album.images[0])

                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: smallestAlbumImage.url
                }
            }))
        })

        return () => cancel = true
    }, [search, accessToken])

    return (
        <div>
            <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
                <Form.Control
                    type="search"
                    placeholder="Search songs/artists"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
                    {searchResults.map(track => <Track track={track} key={track.uri} chooseTrack={chooseTrack}/>)}
                </div>
                <div>
                    <Player accessToken={accessToken} trackUri={currentTrack?.uri} />
                </div>
            </Container>
        </div>
    )
}
