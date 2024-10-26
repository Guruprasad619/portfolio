// src/components/NavigationButtons.js
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './NavigationButtons.css';

const NavigationButtons = ({ onNext, onPrevious }) => {
  const [transitioning, setTransitioning] = useState(false);

  const handleNextClick = () => {
    setTransitioning(true);

    // Delay for the transition effect to complete before navigating
    setTimeout(() => {
      onNext(); // Call the onNext function passed as a prop
      setTransitioning(false);
    }, 400); // Match this delay with the transition duration in CSS
  };

  const handlePreviousClick = () => {
    setTransitioning(true);

    // Delay for the transition effect to complete before navigating
    setTimeout(() => {
      onPrevious(); // Call the onPrevious function passed as a prop
      setTransitioning(false);
    }, 400); // Match this delay with the transition duration in CSS
  };

  return (
    <>
      {/* Transition Bars Effect */}
      <div id="nav-bars" className={`nav-bars ${transitioning ? 'show' : ''}`}>
        <div />
        <div style={{ animationDelay: '0.1s' }} />
        <div style={{ animationDelay: '0.2s' }} />
        <div style={{ animationDelay: '0.3s' }} />
        <div style={{ animationDelay: '0.4s' }} />
      </div>

      {/* Navigation Buttons */}
      <div className={`navigation-buttons ${transitioning ? 'hidden' : ''}`}>
        <div className="nav-circle" onClick={handlePreviousClick}>
          <FaArrowLeft className="nav-icon" />
        </div>
        <div className="nav-circle" onClick={handleNextClick}>
          <FaArrowRight className="nav-icon" />
        </div>
      </div>
    </>
  );
};

export default NavigationButtons;
