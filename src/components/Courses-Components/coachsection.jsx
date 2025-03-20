import React from 'react';
import Coach1 from '../../assets/images/main_images/coach1.png';
import Coach2 from '../../assets/images/main_images/coach2.png';
import Coach4 from '../../assets/images/main_images/coach4.png';
import Coach6 from '../../assets/images/main_images/coach6.png';

const CourseCard = ({ image, title, price, users, date, lessons, rating }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 item mt-4 mb-4">
      <div className="coach-bg">
        <div className="coach-item wow fadeInUp delay-0-2s">
          <div className="coach-image">
            <img src={image} alt="Coach" />
          </div>
          <div className="coach-content">
            <div className="ratting-price">
              <div className="ratting">
                <i className="fa-solid fa-user"></i>
                <span>{users} User</span>
              </div>
              <div className="ratting">
                <i className="fa fa-clock" aria-hidden="true"></i>
                <span>{date}</span>
              </div>
              <div className="ratting">
                <i className="fa-solid fa-book"></i>
                <span>{lessons} Lessons</span>
              </div>
            </div>
            <h3><a href="detailcourse.php">{title}</a></h3>
            <p>Enroll in our course and unlock a world of opportunities with expert guidance and hands-on learning</p>
            <ul className="coach-footer">
              <span className="price">{price}</span>
              <div>
                {Array.from({ length: 5 }, (_, i) => (
                  <i
                    key={i}
                    className={`fa-solid fa-star ${i < rating ? '' : 'fa-regular'}`}
                    style={{ color: '#FFD43B' }}
                  ></i>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const CoachSection = () => {
  const courses = [
    {
      image: Coach1,
      title: 'Mathematics',
      price: '60.00',
      users: 30,
      date: '12-12-2023',
      lessons: 3,
      rating: 4,
    },
    {
      image: Coach2,
      title: 'Computer Science',
      price: '60.00',
      users: 30,
      date: '12-12-2023',
      lessons: 3,
      rating: 4,
    },
    {
      image: Coach4,
      title: 'Chemistry',
      price: '60.00',
      users: 30,
      date: '12-12-2023',
      lessons: 3,
      rating: 4,
    },
    {
      image: Coach6,
      title: 'Artificial Intelligence',
      price: '60.00',
      users: 30,
      date: '12-12-2023',
      lessons: 3,
      rating: 4,
    },
    {
      image: Coach2,
      title: 'Career Counselling',
      price: '60.00',
      users: 30,
      date: '12-12-2023',
      lessons: 3,
      rating: 4,
    },
    {
      image: Coach6,
      title: 'English Pro Course',
      price: '60.00',
      users: 30,
      date: '12-12-2023',
      lessons: 3,
      rating: 4,
    },
  ];

  return (
    <section className="coach-section rel z-1 pt-30 rpt-90 pb-100 rpb-70 bg-lighter">
      <div className="container">
        <div className="row coach-active justify-content-center">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachSection;
