import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FeaturesSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Show 3 slides on desktop
    slidesToScroll: 1,     
    vertical: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,  // Tablet and larger devices
        settings: {
          slidesToShow: 3,  // Show 3 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,  // Mobile devices
        settings: {
          slidesToShow: 1,  // Show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="features-section rel z-1 pt-80 pb-40 bg-blue counter text-white">
      <Slider {...settings}>
        {/* First slide */}
        <div className="feature-item">
          <div className="content" style={{marginLeft: '6em'}}>
            <h4 className="text-white">34K +</h4>
            <p>Success Stories</p>
          </div>
        </div>

        {/* Second slide */}
        <div className="feature-item">
          <div className="content" style={{marginLeft: '6em'}}>
            <h4 className="text-white">210 +</h4>
            <p>Expert Instructors</p>
          </div>
        </div>

        {/* Third slide */}
        <div className="feature-item">
          <div className="content" style={{marginLeft: '6em'}}>
            <h4 className="text-white">54K +</h4>
            <p>Online Courses</p>
          </div>
        </div>

        {/* Fourth slide */}
        <div className="feature-item">
          <div className="content" style={{marginLeft: '6em'}}>
            <h4 className="text-white">80K +</h4>
            <p>Worldwide Members</p>
          </div>
        </div>

        {/* Add more slides as necessary */}
      </Slider>
    </section>
  );
}

export default FeaturesSection;
