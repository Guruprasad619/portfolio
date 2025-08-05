import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import LinkIcon from '@mui/icons-material/Link';
import NavigationButtons from './NavigationButtons'; // Import the NavigationButtons component
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation


// Styled components
const ProjectCard = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 360,
  height: 460,
  // Updated background to include the specified gradients
  backgroundImage: `
    radial-gradient(circle at center center, rgba(33, 33, 33, 0), rgb(33, 33, 33)),
    repeating-linear-gradient(135deg, rgb(33, 33, 33) 0px, rgb(33, 33, 33) 1px, transparent 1px, transparent 4px),
    repeating-linear-gradient(45deg, rgb(56, 56, 56) 0px, rgb(56, 56, 56) 5px, transparent 5px, transparent 6px),
    linear-gradient(90deg, rgb(33, 33, 33), rgb(33, 33, 33))
  `,
  borderRadius: '20px',
  color: 'white',
  transition: 'all 0.3s ease',
  boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  [theme.breakpoints.down('sm')]: {
    height: 480, // Reduced height for mobile
  },
}));

const ProjectCardContent = styled(CardContent)({
  '& .MuiTypography-root': {
    color: 'snow',
  },
});

const CarouselContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '600px',
  [theme.breakpoints.down('sm')]: {
    height: '500px', // Reduced height for mobile
  },
}));

// Sample data
const projectsData = [
  {
    title: "WEATHER FORECAST APP",
    imageUrl: process.env.PUBLIC_URL + "/assets/images/weather.png",
    description: "React.js app for searching locations and viewing 6-day weather forecasts with real-time data using API, featuring a live interactive map background.",
    link: "https://guruprasad619.github.io/Weather-app/", // Link for project 1
  },
  {
    title: "GAME-SPACE: WEB-BASED GAMING PLATFORM",
    imageUrl: process.env.PUBLIC_URL + "/assets/images/gamespace.png",
    description: "Game-Space is a web-based gaming platform featuring 21 mini-JavaScript games, crafted using Next.js and TypeScript.",
    link: "https://guruprasad619.github.io/Game-space/", // Link for project 2
  },
  {
    title: "FACE RECOGNITION-BASED ATTENDANCE SYSTEM",
    imageUrl: process.env.PUBLIC_URL + "/assets/images/attendance.png",
    description: "An automated attendance system using OpenCV and face_recognition for real-time face detection, achieving over 90% accuracy.",
    link: "https://github.com/Guruprasad619/Face-Recognition-Based-Attendance-System", // Link for project 3
  },
  {
    title: "INSURANCE FRAUD DETECTION",
    imageUrl: process.env.PUBLIC_URL + "/assets/images/fraud.png",
    description: "A Flask web app enabling real-time interaction with a trained model for efficient analysis and prediction of potential fraud cases.",
    link: "https://github.com/Guruprasad619/Insurance-fraud-prediction", // Link for project 4
  },
  {
    title: "DRUG CLASSIFICATION MODEL",
    imageUrl: process.env.PUBLIC_URL + "/assets/images/drug.png",
    description: "A drug classification model using K-Nearest Neighbors (KNN) to recommend drugs based on patient data from a dataset of 200 records.",
    link: "https://github.com/Guruprasad619/Drug-Classification-", // Link for project 5
  },
  {
    title: "CAREER NAVIGATOR",
    imageUrl: process.env.PUBLIC_URL + "/assets/images/cn.jpg",
    description: "An AI-driven coding interview platform offering personalized preparation with company-specific questions and an interactive editor.",
    link: "https://career-navigator-iota.vercel.app/", // Link for project 6
  }
  // ... (other project data)
];

// Project Review Card Component
function ProjectReviewCard({ title, imageUrl, description, link }) {
  return (
    <ProjectCard>
      <CardHeader
        avatar={
          <Avatar src={process.env.PUBLIC_URL + "/assets/images/logo.jpg"} aria-label="project" />
        }
        title={title}
      />
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={title}
      />
      <ProjectCardContent>
        <Typography variant="body2" sx={{ marginTop: '20px' }}>
          {description}
        </Typography>
      </ProjectCardContent>
      <CardActions disableSpacing sx={{ marginTop: '20px' }}>
        <IconButton 
          aria-label="add to favorites" 
          sx={{ color: 'white', '&:hover': { color: '#03dac6' } }} // Added hover effect
        >
          <FavoriteIcon />
        </IconButton>
       
        <IconButton 
          aria-label="link" 
          sx={{ color: 'white', '&:hover': { color: '#03dac6' } }} // Added hover effect
          component="a" 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <LinkIcon />
        </IconButton>
      </CardActions>
    </ProjectCard>
  );
}

// Projects Component
function Projects() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <section id="projects" style={{ position: 'relative', padding: '20px 0', backgroundColor: '#1e1f26' }}>
      <h2 style={{ color: '#03dac6', textAlign: 'center', marginBottom: '0px', marginTop: '-8px',fontSize: '1.5rem' }}> 
        PROJECTS
      </h2>
      <CarouselContainer style={{ paddingTop: '15px' }}> 
        <Swiper
          loop={true} // Enable looping behavior
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          style={{
            width: '100%',
            paddingTop: '30px',
            paddingBottom: '30px',
          }}
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index} style={{ width: '80%', maxWidth: '400px' }}>
              <ProjectReviewCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselContainer>
      <NavigationButtons 
        onNext={() => navigate('/contact')} // Navigate to Contact
        onPrevious={() => navigate('/skills')} // Navigate to Skills
      />
    </section>
  );
}

export default Projects;
