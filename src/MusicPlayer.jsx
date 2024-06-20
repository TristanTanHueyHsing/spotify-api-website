import React, { useState } from 'react';
import './MusicPlayer.css'; // Import your custom styles
import Dropdown from 'react-bootstrap/Dropdown';
import Icon from './assets/login-icon.png'; // Verify the path to your icon

const MusicPlayer = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="music-player-container">
      <Dropdown show={showDropdown} onClick={(e) => e.stopPropagation()}>
        <Dropdown.Toggle
          variant="light"
          id="dropdown-basic"
          onClick={toggleDropdown}
          className="position-relative"
        >
          <img src={Icon} alt="Login Icon" className="login-icon" />
        </Dropdown.Toggle>

        <Dropdown.Menu
          align={{ end: true }} // Ensure dropdown menu aligns to the end (right) of the toggle
          className="custom-dropdown-menu"
        >
          <Dropdown.Item disabled>User</Dropdown.Item> {/* Make "User" non-clickable */}
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-2">Login</Dropdown.Item> {/* "Login" remains clickable */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default MusicPlayer;
