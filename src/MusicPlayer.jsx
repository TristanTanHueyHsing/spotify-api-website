// MusicPlayer.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './MusicPlayer.css';
import SpotifyLogin from './SpotifyLogin';

function MusicPlayer() {
  const location = useLocation();
  const code = new URLSearchParams(location.search).get('code');

  return (
    <div className="music-player-container">
      {code ? (
        <div style={{color: 'white'}}>
          <h1>Authorization Code:</h1>
          <p>{code}</p>
        </div>
      ) : (
        <>
          <p>Login to access music player</p>
          <SpotifyLogin />
        </>
      )}
    </div>
  );
}

export default MusicPlayer;
