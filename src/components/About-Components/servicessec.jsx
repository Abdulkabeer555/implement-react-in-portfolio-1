import React, { useEffect, useState } from 'react';
import ChooseImg from '../../assets/images/about/choose-img.webp';

const ChooseOurServices = () => {
  const [exploreLink, setExploreLink] = useState('#');


  return (
    <div className="container choose-service my-20 mb-250">
      <div className="row">
        <div
          className="col-lg-6 col-md-6 choose-img pt-20"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src={ChooseImg} alt="Choose Our Services" />
        </div>

        <div
          className="col-lg-6 col-md-6 why-choose pt-20 pl-40"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="500"
        >
          <span className="text-yellow">ABOUT JINNAH PUBLIC SCHOOL</span>
          <div className="choose-line"></div>
          <h2 className="pt-20">Why Choose Jinnah Public School</h2>
          <p>
            We are committed to empowering our students with a well-rounded education that prepares them for the challenges
            of tomorrow. At Jinnah Public School, we offer personalized learning, cutting-edge facilities, and a supportive
            environment where students not only excel academically but also develop life skills that will guide them throughout
            their lives.
          </p>
          <div className="row pt-20">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
              <div className="why-icon-style">
                <i className="fa-solid fa-print"></i>
                <span className="d-flex align-items-center">
                  <a href="#">Quality Education</a>
                </span>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
              <div className="why-icon-style">
                <i className="fa-solid fa-circle-check"></i>
                <span className="d-flex align-items-center">
                  <a href="#">Skill Development</a>
                </span>
              </div>
            </div>
          </div>
          <p className="pt-40">
            Our goal is to provide a balanced education, ensuring that our students are well-prepared for the future. With a
            team of experienced educators, state-of-the-art facilities, and a curriculum tailored to each student’s needs, we
            foster a learning environment where every student can succeed.
          </p>
          <button className="btn btn-primary coach-btn">
            <a href={exploreLink}>Explore More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseOurServices;

