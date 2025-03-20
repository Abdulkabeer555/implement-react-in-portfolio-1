// ChooseUsSection.jsx
import React from "react";

const ChooseUsSection = ({ title, description, headingClass, spanClass }) => {
  return (
    <div className="container choose2-service">
      <div className="row">
        <div
          className={`col-12 why-choose why-choose1 pt-20 ${headingClass}`}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <span className={`text-${spanClass}`}>WHY CHOOSE US</span>
          <div className="choose-line"></div>
          <h2 className="pt-20">{title}</h2>
          <p className="text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsSection;
