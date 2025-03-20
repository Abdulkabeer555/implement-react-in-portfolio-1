import React from "react";
import ChooseImg from'../../assets/images/about/choose4.jpg'

const StatCard = ({ iconClass, count, label }) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
      <div className="about-cards text-center">
        <i className={`fa-solid ${iconClass} icon3`}></i>
        <h5 className="about-card-text">{count}</h5>
        <span className="about-card-text2">{label}</span>
      </div>
    </div>
  );
};

const ThirdPartySection = () => {
  const stats = [
    { iconClass: "fa-image", count: "15K+", label: "Projects Completed" },
    { iconClass: "fa-user", count: "10K+", label: "Students Enrolled" },
    { iconClass: "fa-message", count: "100K+", label: "Courses Offered" },
  ];

  return (
    <div className="container-fluid about-section3 py-30 my-30">
      <div className="container choose1-service">
        <div className="row mt-50">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              iconClass={stat.iconClass}
              count={stat.count}
              label={stat.label}
            />
          ))}
        </div>
      </div>

      <div className="container choose2-service my-30">
        <div className="row">
          <div
            className="col-lg-6 col-md-6 why-choose pt-20"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <span className="text-white">WHY CHOOSE JINNAH PUBLIC SCHOOL</span>
            <div className="choose-line bg-white"></div>
            <h2 className="pt-20 text-white">Pioneering Quality Education</h2>
            <p className="text-white">
              We are dedicated to transforming education by offering tailored
              learning experiences, expert academic guidance, and a nurturing
              environment that cultivates growth, character, and leadership
              skills.
            </p>
          </div>

          <div
            className="col-lg-6 col-md-6 pt-20"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="500"
          >
            <img src={ChooseImg} alt="" className="choose-img2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPartySection;
