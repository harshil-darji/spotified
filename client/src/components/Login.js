import React from 'react'
import { Container } from 'react-bootstrap'
import AUTH_URL from '../config/loginConf'

function Login() {
    return (
        <div>
            <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
                <a className="btn btn-success btn-lg" href={AUTH_URL}>Login with Spotify</a>
            </Container>
        </div>
    )
}

export default Login
