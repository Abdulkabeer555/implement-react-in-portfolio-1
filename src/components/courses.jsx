import React from 'react';
import '../assets/css/style.css'
import Header from './Header/header.jsx'; 
import Banner from './About-Components/banner.jsx';
import OrderListSection from './Courses-Components/orderlistsection.jsx';
import CoachSection from './Courses-Components/coachsection.jsx';
import Footer from './Footer/footer.jsx';
const Courses = () => {
    return (
      <div>
        <Header  currentPage="courses" />
        <Banner 
        title="OUR COURSES"
        description='"At Jinnah Public School, we offer a wide range of courses designed to foster academic excellence and personal growth. Our programs are crafted to provide a comprehensive learning experience, helping students achieve their full potential in a supportive and dynamic environment."'/>
        <OrderListSection />
        <CoachSection />
        <Footer />
      </div>
    );
  };
  
  export default Courses;