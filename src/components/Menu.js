import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import './Menu.css';

function Menu({ isOpen, onClose, isDarkTheme }) {
  const [animate, setAnimate] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  // Handle navigation with transition effect
  const handleNavClick = (path) => {
    // Close the menu first
    onClose();

    // Wait a bit for the menu to close, then start the transition
    setTimeout(() => {
      setTransitioning(true);

      // Wait for the transition effect to finish, then navigate
      setTimeout(() => {
        navigate(path);
        setTransitioning(false);
      },400); // Match with the duration of the rectangle effect
    }, 200); // Delay for menu close animation
  };

  return (
    <>
      {/* Transition Bars Effect */}
      <div id="bars" className={`bars ${transitioning ? 'show' : ''}`}>
        <div />
        <div style={{ animationDelay: '0.1s' }} />
        <div style={{ animationDelay: '0.2s' }} />
        <div style={{ animationDelay: '0.3s' }} />
        <div style={{ animationDelay: '0.4s' }} />
      </div>

      <div className={`menu-overlay ${isOpen ? 'open' : ''} ${isDarkTheme ? 'dark-theme' : ''}`}>
        <div className="menu-content">
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
          <nav>
            <ul>
              {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item, index) => (
                <li
                  key={item}
                  className={`moveFromLeft ${animate ? 'animate' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <NavLink
                    to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default link behavior
                      handleNavClick(item === 'HOME' ? '/' : `/${item.toLowerCase()}`);
                    }}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Menu;
