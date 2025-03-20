import React from 'react';
import '../assets/css/style.css'
import Header from './Header/header.jsx'; 
import Banner from './About-Components/banner.jsx';
import EventSection from './Events-Components/eventsection.jsx';
import Footer from './Footer/footer.jsx';

const Events = () => {
    console.log('events page')
    return (
      <div>
        <Header  currentPage="events" />
        <Banner 
        title="EVENTS"
        description='"At Jinnah Public School, we organize a wide range of exciting events to foster student growth and community involvement. Our events are designed to engage students, encourage creativity, and provide enriching experiences for all. Join us for an unforgettable journey of learning and fun!'/>
        <EventSection />
        <Footer />
      </div>
    );
  };
  
  export default Events;