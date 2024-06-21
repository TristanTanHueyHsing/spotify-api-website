import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SpotifyLogin from './SpotifyLogin';
import Dashboard from './Dashboard';

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return  code ? <Dashboard code = {code}/> : <SpotifyLogin/>
  
}

export default App;