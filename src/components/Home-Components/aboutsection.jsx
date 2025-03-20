import React from 'react';
import Play_Icon from'../../assets/images/main_images/Play Icon.png';
import Lock_Icon from'../../assets/images/main_images/Lock Icon.png';

function AboutSection() {
  return (
    <section className="about-section pt-130 rpt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 align-self-end">
            <div className="about-content rel z-2 pb-115 rpb-85 wow fadeInRight delay-0-2s">
              <div className="section-title mb-40">
                <span className="mb-25">WHO We ARE</span>
                <h2 className="pt-2">Your Partner in Education at Jinnah Public School</h2>
                <p className="pt-2">
                  Jinnah Public School is committed to providing quality education in a nurturing environment. We focus on
                  academic excellence and holistic development, empowering students to achieve their best. Our teachers are
                  dedicated to fostering creativity and critical thinking to prepare students for a bright future.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="video">
              <div className="d-flex justify-content-between">
                <h4>Educational Videos</h4>
                <h5>(1/110)</h5>
              </div>
              <div className="video_bg d-flex justify-content-between align-items-center mt-2">
                <img
                  src={Play_Icon}
                  alt="play"
                />
                <h5 className="text-start">Introduction to Jinnah Public School</h5>
                <h6 className="hundreds">700</h6>
              </div>
              <br />
              <div className="video_bg-seond d-flex justify-content-between align-items-center">
                <img
                  src={Lock_Icon}
                  alt="lock"
                />
                <h5 className="text-start">Guide to Creating Effective Learning Environments</h5>
                <h6 className="hundreds">700</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
