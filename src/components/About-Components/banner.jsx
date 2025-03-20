import React, { useEffect } from 'react';

const Banner = ({ title, description }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-sine',
      once: true,
    });
  }, []);

  return (
    <div className="container-fluid about-banner">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-1"></div>

        <div className="col-lg-8 col-md-8 col-sm-10" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white' }}>
            {title}
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'white', textAlign: 'justify', marginTop: '15px' }}>
            {description}
          </p>
        </div>

        <div className="col-lg-2 col-md-2 col-sm-1"></div>
      </div>
    </div>
  );
};

export default Banner;
