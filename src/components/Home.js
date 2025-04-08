import React from 'react'; // Removed unused imports
import NavigationButtons from './NavigationButtons'; // Import the NavigationButtons component
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden', // Ensure no scrolling
      position: 'relative',
      margin: '0px',
      padding: '0px', // Added padding reset
      backgroundColor: '#1e1f26',
    }}>
      <iframe
        src={process.env.PUBLIC_URL + "/home page/index.html"}
        title="Home Page Content"
        style={{
          width: '100%',
          height: '100%', // Ensure iframe fills the container
          border: 'none',
          overflow: 'hidden',
        }}
        sandbox="allow-scripts"
      />
      <NavigationButtons 
        onNext={() => navigate('/about')}
        onPrevious={() => navigate('/')}
      />
    </div>
  );
};

export default Home;