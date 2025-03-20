import React from 'react';
import '../assets/css/style.css'
import Header from './Header/header.jsx'; 
import Banner from './About-Components/banner.jsx';
import ChooseOurServices from './About-Components/servicessec.jsx';
import ThirdPartySection from './About-Components/thirdpartysec.jsx';
import ChooseUsSection from './About-Components/chooseussection.jsx';
import CourseSection from './About-Components/coursesection.jsx';
import Footer from './Footer/footer.jsx';
const About = () => {
    return (
      <div>
        <Header  currentPage="about" />
        <Banner title="ABOUT JINNAH PUBLIC SCHOOL"
        description='"At Jinnah Public School, we believe in shaping the future of our students with excellence in education and holistic development. Located in the heart of Karachi, we offer an inspiring learning environment that nurtures creativity, discipline, and a lifelong love for learning."'/>
        <ChooseOurServices />
        <ThirdPartySection />
        <ChooseUsSection />
        <CourseSection />
        <Footer />
      </div>
    );
  };
  
  export default About;