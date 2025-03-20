import React from 'react';
import '../assets/css/style.css'
import Header from './Header/header.jsx'; 
import HeroSection from './Home-Components/herosec1.jsx';
import FeaturesSection from './Home-Components/feature.jsx';
import AboutSection from './Home-Components/aboutsection.jsx';
import CourseSection from './Home-Components/coursesec.jsx';
import MenSection from './Home-Components/mensection.jsx';
import ProcessSection from './Home-Components/processsection.jsx';
import TestimonialSection from './Home-Components/testimonialsection.jsx';
import Footer from './Footer/footer.jsx';

const Index = () => {
  return (
    <div>
      <Header currentPage="home" />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <CourseSection />
      <MenSection />
      <ProcessSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Index;
