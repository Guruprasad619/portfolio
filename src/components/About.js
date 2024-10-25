import React from 'react';
import { Card2 } from "./Card2";
import NavigationButtons from './NavigationButtons'; // Import the NavigationButtons component
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function About() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleProfile = () => {
    console.log("Profile clicked");
  };

  const handleFollow = () => {
    console.log("Follow clicked");
  };

  return (
    <section className="page card-2-example-page" style={{ position: 'relative' }}>
      <h2 style={{
        color: '#03dac6',
        textAlign: 'center',
        fontSize: '1.5rem',
        position: 'absolute',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '-10px 15px',
        zIndex: 1,
      }}>
        ABOUT ME
      </h2>
      <Card2
        image="/assets/images/profile1.png"
        title="Guruprasad G M"
        subtitle="Aspiring Software Developer"
        description="Computer Science student exploring full-stack development and AI/ML through hands-on projects. Eager to learn and grow in the world of technology. Passionate about creating user-friendly applications and solving real-world problems through code."
        onProfile={handleProfile}
        onFollow={handleFollow}
      />
      <NavigationButtons 
        onNext={() => navigate('/skills')} // Navigate to Skills
        onPrevious={() => navigate('/')} // Navigate to Home
      />
    </section>
  );
}

export default About;
