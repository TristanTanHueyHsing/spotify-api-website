import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Soundwave from './assets/Soundwave.png';
import MusicPlayer from './MusicPlayer';
import Feature2 from './Feature2'; // Import the Feature2 component
import './App.css';

const Home = () => {
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
    let pages = pageRef.current.children;
    let pagination = paginationRef.current;
    const init = () => {
      if (pages) {
        count = pages.length;
        if (count) {
          for (let i = 0; i < count; i++) {
            let btn = document.createElement('li');
            btn.dataset.slide = String(i);
            btn.addEventListener('click', btnClick);
            if (i === 0) {
              btn.classList.add('active');
            }
            pagination.appendChild(btn);
          }
        }
      }
    };
    pageRef.current.addEventListener('scroll', handleScroll);
    init();
  }, []);

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
            <h2>About Us</h2>
            <p className="centered">Welcome to our music entertainment website! We are passionate about bringing the joy of music to people around the world. Our platform is dedicated to providing a seamless and immersive music experience for all music lovers. From discovering new artists to enjoying your favorite playlists, we strive to create an environment where music enthusiasts can connect, explore, and indulge in their love for music.

              Our team is composed of music enthusiasts who are dedicated to curating a diverse range of music content. We believe in the power of music to inspire, uplift, and unite people from all walks of life. Whether you're a casual listener or a die-hard music aficionado, our platform has something for everyone.

              At our core, we value creativity, innovation, and inclusivity. We constantly strive to improve and enhance the user experience, ensuring that our platform remains a premier destination for music discovery and enjoyment. Join us on this musical journey and let's explore the endless possibilities of sound together!</p>
          </div>
        </div>
        <div className="page page3">
          <div className="content">
            <h2>Our Services</h2>
            <p>Details about services...</p>
          </div>
        </div>
        <div className="page page4">
          <div className="grid-container">
            <div className="grid-item top-left grid-topleft-style">Music Player<br></br>Welcome to the next level of music streaming! Our music player offers an immersive and intuitive experience, designed to meet the needs of every music lover. Inspired by the best features of Spotify, our platform brings you a seamless and enriched musical journey.</div>
            <div className="grid-item top-right"></div>
            <div className="grid-item bottom-left"></div>
            <div className="grid-item bottom-right">This one ur part</div>
          </div>
        </div>

        <div className="page page5">
          <div className="content">
            <h2>Contact Us</h2>
            <p className='centered'>Have a question or feedback for us? We'd love to hear from you! Feel free to reach out to our team using the contact information below: <br></br>

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
                  <Link className="nav-link" to="/musicplayer">Music Player</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/feature2">Feature 2</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/musicplayer" element={<MusicPlayer />} />
          <Route path="/feature2" element={<Feature2 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
