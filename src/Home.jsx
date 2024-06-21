import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Soundwave from './assets/Soundwave.png';
import MusicPlayer from './MusicPlayer';
import SpotifyLogin from './SpotifyLogin';
import MusicRecommend from './MusicRecommend'; // Import the Feature2 component
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const Home = () => {
  const pageRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  let count = 5;
  let current = 0;

  const updatePagination = (index) => {
    const btns = paginationRef.current?.children;
    if (btns) {
      for (let i = 0; i < btns.length; i++) {
        btns[i].classList.toggle('active', i === index);
      }
    }
  };

  const handleScroll = () => {
    const scrollPosition = pageRef.current.scrollTop;
    const pageHeight = window.innerHeight;
    const newIndex = Math.floor(scrollPosition / pageHeight);
    if (newIndex !== current) {
      current = newIndex;
      updatePagination(current);
    }
  };

  const gotoNum = (index) => {
    const pageHeight = window.innerHeight;
    pageRef.current.scrollTo({
      top: index * pageHeight,
      behavior: 'smooth',
    });
  };

  const btnClick = (e) => gotoNum(parseInt(e.target.dataset.slide));

  React.useEffect(() => {
    if (paginationRef.current.children.length === 0) {
      for (let i = 0; i < count; i++) {
        let btn = document.createElement('li');
        btn.dataset.slide = String(i);
        btn.addEventListener('click', btnClick);
        if (i === 0) {
          btn.classList.add('active');
        }
        paginationRef.current.appendChild(btn);
      }
    }
    pageRef.current.addEventListener('scroll', handleScroll);
  }, []); // Empty dependency array to run once

  return (
    <>
      <div className="main_container" ref={pageRef}>
        <div className="page page1">
          <div className="translucent-part">
            <div className="text-container">
              <h1>Welcome to Our Music Platform</h1>
              <p>Experience the best music here.</p>
            </div>
          </div>
        </div>
        <div className="page page2">
          <div className="content">
            <h2>About Us</h2><br></br>
            <p className="center">Welcome to our music entertainment website! We are passionate about bringing the joy of music to people around the world. Our platform is dedicated to providing a seamless and immersive music experience for all music lovers. From discovering new artists to enjoying your favorite playlists, we strive to create an environment where music enthusiasts can connect, explore, and indulge in their love for music.

              Our team is composed of music enthusiasts who are dedicated to curating a diverse range of music content. We believe in the power of music to inspire, uplift, and unite people from all walks of life. Whether you're a casual listener or a die-hard music aficionado, our platform has something for everyone.

              At our core, we value creativity, innovation, and inclusivity. We constantly strive to improve and enhance the user experience, ensuring that our platform remains a premier destination for music discovery and enjoyment. Join us on this musical journey and let's explore the endless possibilities of sound together!</p>
          </div>
        </div>
        <div className="page page3">
          <div className="content">
            <h2>Our Services</h2><br></br>
            <p className='centred'>At SoundWave, our primary service revolves around enabling you to effortlessly search and play music. With our intuitive platform, you can explore a vast library of songs and instantly stream your favorites with just a few clicks. Whether you're looking for the latest hits or timeless classics, our robust search functionality ensures you can easily discover and enjoy the music you love. Experience seamless playback and uninterrupted listening, making SoundWave your go-to destination for all your music needs.
              We also have music recommendation which allows you the user to be able to search your favourite music. Dive deeper into the music you love and discover new favorites with our personalized recommendations!  Tell us your tastes or browse curated playlists, and our system will use its smarts to suggest songs and artists you'll love.
            </p>
          </div>
        </div>
        <div className="page page4">
          <div className="grid-container">
            <div className="grid-item top-left grid-text-style">
              <div className="music-player-title">Music Player</div><br></br>
              <span>
                Dive into a world of high-quality sound and personalized music journeys.<br></br> Whether you're enjoying your favorite hits or discovering new tracks,<br></br> our platform provides a seamless and immersive listening experience.<br></br> Explore an extensive library of songs and albums. Our music player <br></br>is designed to enhance your listening pleasure. Let the melodies flow <br></br>and make every moment unforgettable as you lose yourself in the music.
              </span>
            </div>
            <div className="grid-item top-right"></div>
            <div className="grid-item bottom-left"></div>
            <div className="grid-item bottom-right grid-text-style">
              <div className="music-recommend-title">Music Recommendation</div><br></br>
              <span>
                Our innovative platform leverages advanced algorithms and the power of a <br></br>robust music API to curate playlists tailored specifically to your unique tastes.<br></br> Whether you're in the mood for upbeat tunes to kickstart your day or <br></br>soothing melodies to unwind in the evening, we've got you covered. Simply <br></br>explore our website, and let us introduce you to new artists and tracks that <br></br>perfectly match your musical preferences. Dive into a world of music discovery <br></br>and make every moment resonate with the perfect soundtrack!
              </span>
            </div>
          </div>
        </div>

        <div className="page page5">
          <div className="content">
            <h2>Contact Us</h2><br></br>
            <p className='centered'>Have a question or feedback for us? We'd love to hear from you!<br></br> Feel free to reach out to our team using the contact information below: <br></br>

              Email: musicentertainment@clearlyfake.com<br></br>

              Phone: 1-400-MUSIC-ENT<br></br>

              Address: 123 Music Street, Cityville, State, Country</p>
          </div>
        </div>
      </div>
      <ul className="pagination" ref={paginationRef}></ul>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <div className="navbar-brand mx-auto">
              <img src={Soundwave} alt='Soundwave' className='logo' />
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/spotifylogin">Music Player</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/musicrecommendation">Music Recommendation</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spotifylogin" element={<SpotifyLogin />} />
          <Route path="/musicplayer" element={<MusicPlayer />} />
          <Route path="/musicrecommendation" element={<MusicRecommend />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;