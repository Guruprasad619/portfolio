import React, { useEffect, useState } from 'react';
import NavigationButtons from './NavigationButtons'; // Import the NavigationButtons component
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Home = () => {
  const [iframeHeight, setIframeHeight] = useState('100vh');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const updateHeight = () => {
      const windowHeight = window.innerHeight;
      setIframeHeight(`${windowHeight}px`);
    };

    // Set initial height
    updateHeight();

    // Update height on window resize
    window.addEventListener('resize', updateHeight);

    // Cleanup
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
      margin: '0px',
      backgroundColor: '#1e1f26',
    }}>
      <iframe
        src={process.env.PUBLIC_URL + "/home page/index.html"} // Update this line
        title="Home Page Content"
        style={{
          width: '100%',
          height: iframeHeight,
          border: 'none',
          overflow: 'hidden',
        }}
        sandbox="allow-scripts" // Removed allow-same-origin for security
      />
      <NavigationButtons 
        onNext={() => navigate('/about')} // Navigate to About
        onPrevious={() => navigate('/')} // Navigate to Home (if needed)
      />
    </div>
  );
};

export default Home;