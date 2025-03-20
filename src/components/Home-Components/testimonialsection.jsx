import React from 'react';
import StarImg from '../../assets/images/main_images/Star.png';
import Blog1 from '../../assets/images/main_images/blog1.png';
import Blog3 from '../../assets/images/main_images/blog2.png';
import Roger from '../../assets/images/main_images/roger.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = ({ ratingImage, title, description, authorImage, authorName, authorDesignation }) => {
  return (
    <div className="box">
      <div className="ratting">
        <img src={ratingImage} alt="star" />
      </div>

      <div className="designation">
        <h4>{title}</h4>
      </div>

      <p className="paraone">{description}</p>

      <div className="testi_author_img d-flex">
        <img src={authorImage} alt="Author" />
        <div className="author_section">
          <h4>{authorName}</h4>
          <p className="para">{authorDesignation}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,   
    slidesToScroll: 3,     
    vertical: false,     
    centerMode: false,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      ratingImage: StarImg,
      title: 'Exceptional Educational Support',
      description:
        'Jinnah Public School provides exceptional educational support with individualized attention. The teachers are highly dedicated to students\' success, and the school fosters a positive and engaging learning environment.',
      authorImage: Blog1,
      authorName: 'Anthony Wade',
      authorDesignation: 'Education Consultant',
    },
    {
      ratingImage: StarImg,
      title: 'Dynamic & Interactive Learning Experience',
      description:
        "Jinnah Public School's interactive learning methods keep my child engaged and motivated. The innovative teaching tools make learning fun and challenging, helping develop critical thinking skills and keeping them excited about their studies.",
      authorImage: Blog3,
      authorName: 'Karen Bernes',
      authorDesignation: 'Parent & Child Development Expert',
    },
    {
      ratingImage: StarImg,
      title: 'Strong Focus on Holistic Development',
      description:
        'At Jinnah Public School, the focus is not only on academics but also on holistic development. The extracurricular activities and support systems are outstanding, and they truly prepare students for life beyond school.',
      authorImage: Roger,
      authorName: 'Mr. Zain Malik',
      authorDesignation: 'Educational Administrator',
    },
    {
      ratingImage: StarImg,
      title: 'Comprehensive E-Learning Experience',
      description:
        'The e-learning platform of Jinnah Public School has been a game-changer for my child. The online resources are incredibly helpful, and the communication with teachers has always been clear and efficient.',
      authorImage: Roger,
      authorName: 'Rogar Rester',
      authorDesignation: 'E-Learning Specialist',
    },
  ];

  return (
    <section className="testimonials-section rel z-1 py-100 rpy-100">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="testimonial-left-content rmb-65 wow fadeInLeft delay-0-2s">
              <div className="testimonial-heading section-title">
                <h6>REVIEWS & TESTIMONIALS</h6>
                <h2>How Our Students and Parents See Us</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  ratingImage={testimonial.ratingImage}
                  title={testimonial.title}
                  description={testimonial.description}
                  authorImage={testimonial.authorImage}
                  authorName={testimonial.authorName}
                  authorDesignation={testimonial.authorDesignation}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
