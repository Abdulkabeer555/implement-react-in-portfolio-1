// ContactUs.js
import React from 'react';

const ContactForm = () => {
  return (
    <section className="contact-main">
      <div className="container contact-main-detail" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
        <div className="row">
          <div className="col-lg-6 col-md-6 pt-3">
            <h3>FOR MORE DETAILS</h3>
            <h3>CONTACT US!</h3>
            <div className="line"></div>
            <p className="pt-3">
              We're here to help! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us. Our team is dedicated to providing timely and personalized assistance to ensure your experience with us is nothing short of exceptional.
            </p>
          </div>

          <div className="col-lg-6 col-md-6 pt-3">
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">State</label>
                <select id="inputState" className="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input form-check-input2" type="checkbox" id="gridCheck" />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
