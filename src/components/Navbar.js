import React, { useState, useEffect } from 'react';
import { FaBars, FaMusic} from 'react-icons/fa';
import Menu from './Menu';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Removed isDarkTheme state
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio('/assets/audio/music.mp3')); // Replace with your music file path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Removed toggleTheme function

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
          <a href="/" className="avatar-link">
            <img src="/assets/images/logo.jpg" alt="Avatar" className="avatar" /> 
          </a>
        </div>
      </nav>
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} isDarkTheme={true} /> 
    </>
  );
}

export default Navbar;


