import React from 'react';
import NumberImg from '../../assets/images/main_images/Number.png'
import NumberImg2 from '../../assets/images/main_images/Number (2).png'
import NumberImg3 from '../../assets/images/main_images/Number (3).png'


const Process = ({ processId, imageSrc, title, description }) => {
  return (
    <div className="col-lg-4">
      <div className="d-flex abc">
        <div className="sec9-num px-2 rounded-circle">
          <img src={imageSrc} alt={`process-${processId}`} />
        </div>
        <div className="line21"></div>
      </div>
      <h5 className="mt-5 fs-3">{title}</h5>
      <p className="sec9-text1">{description}</p>
    </div>
  );
};


const ProcessSection = () => {
  
  const processSteps = [
    {
      processId: 1,
      imageSrc: NumberImg,
      title: 'Select Your Program',
      description:
        'At Jinnah Public School, we offer a range of programs tailored to your child’s needs, from foundational learning to advanced academic courses. Choose the path that helps your child excel academically and socially.',
    },
    {
      processId: 2,
      imageSrc: NumberImg2,
      title: 'Complete Your Registration',
      description:
        'To join Jinnah Public School, simply complete our easy online registration process and secure your spot. After registration, payment options are provided to confirm your enrollment. We make the process fast and hassle-free.',
    },
    {
      processId: 3,
      imageSrc: NumberImg3,
      title: 'Engage with Expert Educators',
      description:
        'At Jinnah Public School, we offer a dynamic learning environment where students engage directly with expert educators. Our interactive approach ensures that students stay involved and get personalized attention throughout their academic journey.',
    },
  ];

  return (
    <section className="step_section">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-12">
            <p className="heading-sec1 text-start" style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>
              HOW IT WORKS
            </p>
            <p className="sec4-head1 fs-1" style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>
              YOUR ONLINE LEARNING JOURNEY, MADE EASY
            </p>
            <p className="sec9-text1" style={{ fontSize: '16px', color: '#555', lineHeight: '1.6', maxWidth: '800px' }}>
              At Jinnah Public School, we believe in nurturing every student’s potential through personalized, high-quality education. Our approach blends modern teaching techniques with practical learning experiences, ensuring that every child thrives academically and personally. Join us in shaping a brighter future, one student at a time.
            </p>
          </div>

          
          {processSteps.map((process, index) => (
            <Process
              key={index}
              processId={process.processId}
              imageSrc={process.imageSrc}
              title={process.title}
              description={process.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
