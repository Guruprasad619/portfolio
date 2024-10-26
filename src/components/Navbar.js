import React, { useState, useEffect } from 'react';
import { FaBars, FaMusic } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Menu from './Menu';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(process.env.PUBLIC_URL + '/assets/audio/music.mp3')); // Update this line

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Set body class to dark-theme by default
    document.body.classList.add('dark-theme');

    // Cleanup function
    return () => {
      audio.pause();
    };
  }, [audio]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <button className="menu-button" onClick={toggleMenu}>
            <FaBars /> MENU 
          </button>
        </div>
        <div className="navbar-center"> 
          <button className={`icon-button ${isPlaying ? 'playing' : ''}`} onClick={toggleMusic}>
            <FaMusic />
          </button>
        </div>
        <div className="navbar-right">
          <Link to="/" className="avatar-link"> {/* Use Link instead of a */}
            <img src={process.env.PUBLIC_URL + "/assets/images/logo.jpg"} alt="Avatar" className="avatar" />
          </Link>
        </div>
      </nav>
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} isDarkTheme={true} /> 
    </>
  );
}

export default Navbar;
