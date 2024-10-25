import React from 'react';
import { toast, Toaster } from 'react-hot-toast'; // Import toast and Toaster
import styles from './Contact.module.css';
import { FaTwitter, FaLinkedinIn, FaWhatsapp, FaEnvelope, FaGithub } from 'react-icons/fa';
import NavigationButtons from './NavigationButtons'; // Import the NavigationButtons component
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Contact = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    
    // Properly encode the form data
    const encodedData = Array.from(formData.entries())
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');

    try {
      await fetch(`https://docs.google.com/forms/d/e/1FAIpQLScpItR_Pm-y2PS3C33-hXXNDynTp1Zkmld9lGQ_TIH13Ssd4Q/formResponse?${encodedData}`, {
        method: 'POST',
        mode: 'no-cors',
      });

      toast.success('Thanks for your response!', {
        icon: '👍',
        style: {
          borderRadius: '10px',
          background: '#1e1f26',
          color: 'snow',
        },
      });

      form.reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.heading}>CONTACT ME</h2>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="entry.593212027" // Updated with the correct entry ID for Name
          placeholder="Enter Your Good Name " 
          required // Make this field required
        />

        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="entry.533863544" // Updated with the correct entry ID for Email
          placeholder="example@gmail.com" 
          required // Make this field required
        />

        <label htmlFor="message">Message:</label>
        <textarea 
          id="message" 
          name="entry.381445346" // Updated with the correct entry ID for Message
          placeholder="Let's connect!&#10;Great work!&#10;Let's work together!&#10;Comment anything &#10;Your feedback is appreciated." 
          required // Make this field required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      {/* Toast container */}
      <Toaster position="top-center" reverseOrder={false} />
      
      <footer className={styles.footer}>
        <div className={styles.background}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="100%"
            height="100%"
            viewBox="0 0 1600 900"
          >
            <defs>
              <path
                id="wave"
                fill="#03dac6"
                d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
                s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
              />
            </defs>
            <g>
              <use xlinkHref="#wave" opacity=".4">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="8s"
                  calcMode="spline"
                  values="270 230; -334 180; 270 230"
                  keyTimes="0; .5; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite"
                />
              </use>
              <use xlinkHref="#wave" opacity=".6">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="6s"
                  calcMode="spline"
                  values="-270 230;243 220;-270 230"
                  keyTimes="0; .6; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite"
                />
              </use>
              <use xlinkHref="#wave" opacity=".9">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="4s"
                  calcMode="spline"
                  values="0 230;-140 200;0 230"
                  keyTimes="0; .4; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite"
                />
              </use>
            </g>
          </svg>
        </div>
        <section className={styles.section}>
          <ul className={styles.socials}>
            <li><a href="https://x.com/GuruprasadGM12" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter className={styles.icon} /></a></li>
            <li><a href="https://linkedin.com/in/guruprasadgm" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn className={styles.icon} /></a></li>
            <li><a href="https://wa.me/+919380885413" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp className={styles.icon} /></a></li>
            <li><a href="mailto:guruprasadgm404@gmail.com" aria-label="Email"><FaEnvelope className={styles.icon} /></a></li>
            <li><a href="https://github.com/Guruprasad619" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub className={styles.icon} /></a></li>
          </ul>
          <p className={styles.legal}>© 2024 All rights reserved</p>
        </section>
      </footer>
      <NavigationButtons 
        onNext={() => navigate('/')} // Navigate to Home
        onPrevious={() => navigate('/projects')} // Navigate to Projects
      />
    </div>
  );
};

export default Contact;
