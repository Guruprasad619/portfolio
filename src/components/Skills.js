import React from "react";
import "./Skills.css";
import NavigationButtons from './NavigationButtons';
import { useNavigate } from 'react-router-dom';
import IconCloud from './IconCloud';


const Skills = () => {
  const navigate = useNavigate();

  const iconSlugs = [
    "typescript",
    "javascript",
    "python",
    "java",
    "react",
    "html5",
    "css3",
    "nextdotjs",
    "git",
    "github",
    "visualstudiocode",
    "androidstudio",
    "c",
    "django",
    "mysql"
  ];


  return (
    <div className="skills-container" style={{
      backgroundColor: '#1e1f26',
      color: 'Snow',
    }}>
      <h2 style={{
        color: '#03dac6',
        textAlign: 'center',
        fontSize: '1.5rem',
        position: 'absolute',
        top: '-40px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '50px 50px',
        zIndex: 1,
      }}>
        EXPERTISE
      </h2>
      <div className="icon-cloud-container" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        position: 'relative',
      }}>
        <IconCloud iconSlugs={iconSlugs} />
      </div>
      <NavigationButtons 
        onNext={() => navigate('/projects')}
        onPrevious={() => navigate('/about')}
      />
    </div>
  );
};

export default Skills;