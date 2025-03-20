import React from 'react';

const CourseCard = ({ icon, title, description, aosDuration }) => {
  return (
    <div
      className="col-lg-3 col-md-6 col-sm-6 col-12 mt-3"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration={aosDuration}
    >
      <div className="about-cards">
        <i className={`fa-solid ${icon}`}></i>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
