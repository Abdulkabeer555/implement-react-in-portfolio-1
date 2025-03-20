import React, { useState, useEffect } from 'react';
import Icon from '../../assets/images/main_images/Icon.png';
import Icon1 from '../../assets/images/main_images/Icon (1).png';
import Icon2 from '../../assets/images/main_images/Icon (2).png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="cards" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '300px' }}>
        <img src={imageSrc} className="card-img-top" alt="card" style={{ maxWidth: '100%', height: 'auto' }} />
        <h5 style={{ fontSize: '14px', marginTop: '10px', lineHeight: '1.5' }}>{title}</h5>
        <p style={{ fontSize: '14px', marginBottom: '20px', padding: '0 10px', whiteSpace: 'normal', overflow: 'visible' }}>
          {description}
        </p>
      </div>
    </div>
  );
};

const CourseSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  const courses = [
    {
      imageSrc: Icon,
      title: 'Quality Education',
      description: 'We offer programs that foster creativity, critical thinking, and leadership to prepare students for a bright future.',
    },
    {
      imageSrc: Icon1,
      title: 'Skill Development',
      description: 'We focus on developing essential skills in academics, arts, and sports to help students excel in all areas of life.',
    },
    {
      imageSrc: Icon2,
      title: 'Expert Faculty',
      description: 'Our skilled, passionate, and certified educators are committed to guiding each student to success with personalized attention.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,   
    slidesToScroll: 1,     
    vertical: false,     
    centerMode: false,  
  };

  useEffect(() => {
    // Update the mobile state based on screen width
    const checkMobile = () => {
      if (window.innerWidth <= 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="course">
      <div className="container">
        {isMobile ? (
          <Slider {...settings}>
            {courses.map((course, index) => (
              <div key={index}>
                <Card
                  imageSrc={course.imageSrc}
                  title={course.title}
                  description={course.description}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="row">
            {courses.map((course, index) => (
              <Card
                key={index}
                imageSrc={course.imageSrc}
                title={course.title}
                description={course.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseSection;
