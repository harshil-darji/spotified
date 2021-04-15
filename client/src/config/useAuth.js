import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
        axios.post('http://10.0.0.58:3001/login', {
            code
        }).then((response) => {
            setAccessToken(response.data.accessToken)
            setRefreshToken(response.data.refreshToken)
            setExpiresIn(response.data.expiresIn)
            window.history.pushState({}, null, "/")
        }).catch(err => {
            console.log(err);
            // window.location = "/"
        })
    }, [code])

    useEffect(() => {
        if (!refreshToken || !expiresIn)
            return;
        const timeout = setInterval(() => {
            axios.post('http://10.0.0.58:3001/refresh', {
                refreshToken
            }).then((response) => {
                setAccessToken(response.data.accessToken)
                setExpiresIn(response.data.expiresIn)
            }).catch(err => {
                console.log(err)
                // window.location = "/"
            })
        }, (expiresIn - 60) * 1000)
        return () => clearTimeout(timeout)
    }, [refreshToken, expiresIn])

    return accessToken;
}
