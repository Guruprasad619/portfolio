import React from "react";
import "./Skills.css";
import NavigationButtons from './NavigationButtons'; // Import the NavigationButtons component
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Skills = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const skills = [
    "C", "Java", "Python", "HTML", "CSS", "JavaScript", "Algorithms",
    "Django", "Flask", "React.js", "MySQL", "Git", "GitHub",
    "AIML", "Data Science", "API", "Next.js",
    "VS Code", "OpenCV", "Data Structures",
    "Problem-solving", "Teamwork", "Creativity"
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
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '50px 50px',
        zIndex: 1,
      }}>
        EXPERTISE
      </h2>
      <div className="tagcloud-wrapper">
        <div className="tagcloud-controls" style={{ "--num-elements": skills.length }}>
          {skills.map((_, index) => (
            <div key={index} className="tagcloud-control-button" style={{ "--index": index + 1 }}>
              <input type="radio" name="tagcloud-control-input" />
            </div>
          ))}

          <div className="tagcloud-rotation">
            <ul className="tagcloud-tags" style={{ "--num-elements": skills.length }}>
              {skills.map((skill, index) => (
                <li key={index} className="tagcloud-tag" style={{ "--index": index + 1 }}>
                  <div>
                    <a href="/skills" onClick={(e) => e.preventDefault()}>{skill}</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <NavigationButtons 
        onNext={() => navigate('/projects')} // Navigate to Projects
        onPrevious={() => navigate('/about')} // Navigate to About
      />
    </div>
  );
};

export default Skills;
