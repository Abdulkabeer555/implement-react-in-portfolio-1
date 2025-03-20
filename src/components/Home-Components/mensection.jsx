import React from 'react';
import MenLaptopImage from '../../assets/images/main_images/men_laptop.png';
import YellowIcon from '../../assets/images/main_images/yelloIcon.png';
import FeatureIcon from '../../assets/images/main_images/Frame 6.png';


const FeatureCard = ({ imageSrc, title, description }) => {
  return (
    <div className="men_icon d-flex">
      <div className="men_icon_img">
        <img src={imageSrc} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <div className="men_icon_text">
        <h5 className="pt-2" style={{ fontSize: '14px' }}>{title}</h5>
        <p className="para pt-2" style={{ fontSize: '14px' }}>{description}</p>
      </div>
    </div>
  );
};


const MenSection = () => {
  const features = [
    {
      imageSrc: FeatureIcon,
      title: 'High-Quality Content Courses',
      description: 'Access a wide range of courses designed by experts, ensuring top-notch learning experiences for every learner.',
    },
    {
      imageSrc: FeatureIcon,
      title: 'Interactive Learning Experience',
      description: 'Engage in hands-on, interactive learning that keeps you involved, making education more enjoyable and effective.',
    },
    {
      imageSrc: FeatureIcon,
      title: 'Exceptional Support',
      description: 'Our dedicated support team is or challenges you may face during your learning journey.',
    },
  ];

  return (
    <section className="about-section pt-120 rpt-100">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-6 col-md-12 col-12">
            <div className="men_image">
              <div className="men_img">
                <img src={MenLaptopImage} alt="men" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>
              <div className="men_star d-flex mt-2">
                <img src={YellowIcon} alt="play" />
                <h5 className="text-start" style={{ fontSize: '14px' }}>Learn at your own pace, with lifetime access on mobile and desktop.</h5>
              </div>
              <div className="d-flex mt-2">
                <ul className="men_unorder">
                  <li><a href="#" style={{ fontSize: '14px', color: 'white', textDecoration: 'none' }}>Download Now</a></li>
                </ul>
              </div>
            </div>
          </div>

          
          <div className="col-lg-6 col-md-12 col-12">
            <div className="men-content rel z-2 pb-115 rpb-85 wow fadeInRight delay-0-2s">
              <div className="section-title mb-40">
                <h6><span className="mb-25">Why Choose Us</span></h6>
                <h2 className="pt-2">Your Learning Journey, Your Way</h2>
                <p className="para pt-2" style={{ fontSize: '14px' }}>
                  Experience flexible learning options that cater to your personal needs. Gain access to high-quality materials, expert guidance, and a community that supports your growth.
                </p>
              </div>

              
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  imageSrc={feature.imageSrc}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenSection;
