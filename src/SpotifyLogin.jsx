// SpotifyLogin.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SpotifyLogin.css';
import { Container } from 'react-bootstrap';

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=3e69e62bfd2448b7af3ff3c0ddb877a6&response_type=code&redirect_uri=http://localhost:5173/musicplayer&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

export default function SpotifyLogin() {
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '80vh' }}>
      <p className='login-message mb-4'>Login to access music player</p>
      <a className='btn btn-success btn-lg' href={AUTH_URL}>
        Login With Spotify
      </a>
    </Container>
  );
}
