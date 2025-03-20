import React, { useState } from 'react';

const EventSection = () => {
  const [message, setMessage] = useState('');

  // Static content for now, could be dynamic in future (e.g., fetching from an API)
  const eventData = {
    title: "Introduction To Events",
    description: "Welcome to the events at Jinnah Public School! Join us as we explore the importance of collaboration between parents, teachers, and students. Through interactive discussions and enriching sessions, we aim to strengthen the community and empower our students for academic success. Let’s unite to build a supportive environment for our children’s growth and learning.",
    quote: "\"Join us at Jinnah Public School for our special events, where we explore how parents and teachers can work together to help students excel in their educational journey and beyond.\"",
    socialLinks: [
      { id: 1, platform: 'facebook', icon: 'fab fa-facebook' },
      { id: 2, platform: 'instagram', icon: 'fab fa-instagram' },
      { id: 3, platform: 'youtube', icon: 'fab fa-youtube' },
      { id: 4, platform: 'tiktok', icon: 'fab fa-tiktok' },
    ]
  };

  // Handle textarea change
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <section className="events">
      <div className="container" data-aos="fade-right" data-aos-duration="1000">

        {/* Event Title */}
        <h3 className="pt-50">{eventData.title}</h3>

        {/* Event Description */}
        <p>{eventData.description}</p>

        {/* Quote */}
        <p className="blackquotes" data-aos="fade-right" data-aos-duration="2000">{eventData.quote}</p>

        {/* Additional Description */}
        <p>Come together at our Jinnah Public School gatherings, where we engage in meaningful conversations about how parents and teachers can collaborate to create a positive learning environment. Together, we can share valuable insights and strategies that will nurture student success.</p>
        <p>Become a part of our supportive community at Jinnah Public School events, where we focus on building strong relationships between parents and teachers. By working together, we can ensure every student receives the guidance and encouragement they need to thrive.</p>

        {/* Social Media Icons */}
        <SocialIcons links={eventData.socialLinks} />

        {/* Message Textarea */}
        <h3>Mention Your Thoughts</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            placeholder="Message"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
        </div>
      </div>
    </section>
  );
};

// Reusable component for social icons
const SocialIcons = ({ links }) => {
  return (
    <div className="icon text-center pt-20 pb-20" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000">
      {links.map((link) => (
        <i key={link.id} className={link.icon}></i>
      ))}
    </div>
  );
};

export default EventSection;
