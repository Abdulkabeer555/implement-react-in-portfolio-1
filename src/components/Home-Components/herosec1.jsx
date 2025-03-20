import React from 'react';
import women_two from '../../assets/images/main_images/women_two.png'; 
import star from '../../assets/images/main_images/Star.png'; 
import roger from '../../assets/images/main_images/roger.png'; 
import image_box from '../../assets/images/main_images/Image Box 2.png'; 
function HeroSection() {
  return (
    <section className="hero-section rel z-1 pt-150 rpt-135 pb-75 rpb-100">
      <div className="container">
        <span className="sub-title style-two mb-20 wow fadeInUp delay-0-2s text-center">
          Education & Learning Opportunities at Jinnah Public School
        </span>
        <div className="row align-items-center pt-4">
          <div className="col-lg-3 col-md-12 col-12">
            <div className="hero-content">
              <div className="hero-right-images text-lg-right wow fadeInUp delay-0-2s">
                <img
                  src={women_two}
                  className="women_image img-fluid"
                  alt="Hero"
                />
                <h4 className="wow fadeInUp delay-0-6s heading-one">
                  How it Works at Jinnah Public School
                </h4>
                <h6 className="wow fadeInUp delay-0-6s two-mints heading-two">2 mins</h6>
              </div>

              <div className="star pt-4">
                <img
                  src={star} className="star img-fluid"
                  alt="star"
                />
                <p className="wow fadeInUp delay-0-6s star_para pt-4">
                  This approach helped me understand the concepts much better, and the support from teachers was amazing.
                </p>
                <div className="star_logo d-flex">
                  <img
                    src={roger}
                    className="star img-fluid"
                    alt="star"
                  />
                  <div>
                    <h5 className="wow fadeInUp delay-0-6s star_heading">Roger Rester</h5>
                    <p className="wow fadeInUp delay-0-6s star_para">Parent at Jinnah Public School</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-12">
            <div className="hero-content rpt-25 rmb-75">
              <h1 className="mb-20 wow fadeInUp delay-0-4s text-center big_heading">
                Learn Without Limits at Jinnah Public School
              </h1>
              <p className="wow fadeInUp delay-0-6s text-center ps-4 para">
                Start, switch, or advance your child’s education with more than 5,400 courses. Elevate their learning with
                professional, certified, and experienced teachers from world-class educational backgrounds.
              </p>
              <div className="hero-btns d-flex justify-content-center mt-4">
                <button className="btn btn-primary hero-btn-1">
                  <a href="#">Join Now</a>
                </button>
                <button className="btn btn-primary hero-btn-2">
                  <a href="#">Learn More</a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-2 pt-4 vertical-align-bottom">
            <div className="hero-right-images text-lg-right wow fadeInUp delay-0-2s">
              <img
                src={image_box}
                className="women_image_two img-fluid"
                alt="Hero"
              />
              <h4 className="wow fadeInUp delay-0-6s heading-three">How it Works at Jinnah Public School</h4>
              <h6 className="wow fadeInUp delay-0-6s two-mints heading-four">2 mins</h6>
            </div>
          </div>
        </div>
      </div>
      <span className="bg-text">Learn</span>
    </section>
  );
}

export default HeroSection;
