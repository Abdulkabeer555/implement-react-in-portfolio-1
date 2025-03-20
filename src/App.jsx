import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Index from './components/index';
import About from './components/about';
import Courses from './components/courses';
import Events from './components/events';
import Contact from './components/contact';
import Slider from "react-slick";

const App = () => {
  const path = window.location.pathname;  
  
  let Component;
  if (path === "/about") {
    Component = About;
  } else if
   (path === "/courses") {
     Component = Courses;
  } else if
   (path === "/events") {
    Component = Events;
  } 
   else if
   (path === "/contact") {
    Component = Contact;
  } else {
    Component = Index;
  }

  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-sine',
      once: true,  
    });
  }, []);

  return (
    
    <div>
      <Component />
    </div>
  );
};

export default App;
