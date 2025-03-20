import React from 'react';
import CourseCard from './coursecard';

const CourseSection = () => {
  return (
    <section className="course">
      <div className="container">
        <div className="row mb-5">
          <CourseCard
            icon="fa-house"
            title="Home Projects"
            description="Innovative hands-on assignments that cultivate creativity and practical skills."
            aosDuration="500"
          />
          <CourseCard
            icon="fa-globe icon2"
            title="Online Classes"
            description="Accessible learning platform fostering global education and collaboration online."
            aosDuration="1000"
          />
          <CourseCard
            icon="fa-book-open"
            title="Book Library"
            description="Vast repository offering diverse knowledge and immersive experiences for readers."
            aosDuration="1500"
          />
          <CourseCard
            icon="fa-graduation-cap icon2"
            title="Skilled Instructors"
            description="Experienced mentors providing personalized guidance to ensure academic excellence."
            aosDuration="2000"
          />
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
