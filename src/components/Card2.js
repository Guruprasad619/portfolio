import React from 'react';
import "./Card2.css";

export const Card2 = ({
  image,
  title,
  subtitle,
  description,
}) => (
  <div className="card-2">
    <img src={image} alt={title} />
    <div>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
      <div className="buttons">
        <button className="button" onClick={() => {
          // Specify the path to your PDF file in the assets/pdfs folder
          const link = document.createElement('a');
          link.href = process.env.PUBLIC_URL + '/assets/images/Latest_resume.pdf'; // Updated path to the PDF file
          link.download = 'Guruprasadgm_resume.pdf'; // Name of the downloaded file
          document.body.appendChild(link); // Append the link to the body
          link.click(); // Trigger the download
          document.body.removeChild(link); // Clean up the link element after download
        }}>
          Resume
        </button>
        <button className="button" onClick={() => window.open("https://linkedin.com/in/guruprasadgm", "_blank")}>Follow</button>
      </div>
    </div>
  </div>
);
