import React from 'react';
import '../assets/css/style.css'
import Header from './Header/header.jsx'; 
import Banner from './About-Components/banner.jsx';
import ContactForm from './Contact-Component/contactform.jsx';
import Footer from './Footer/footer.jsx';

const Contact = () => {
    console.log('events page')
    return (
      <div>
        <Header   currentPage="contact"/>
        <Banner 
  title="CONTACT US"
  description="'At Jinnah Public School, we're always here to connect with you. Our commitment to fostering student success drives everything we do. Whether you have questions, suggestions, or want to learn more about our programs, we’re just a message away. Reach out today and let’s work together to make learning an inspiring and fulfilling experience for all our students.'"/>
        <ContactForm />
        <Footer />
      </div>
    );
  };
  
  export default Contact;