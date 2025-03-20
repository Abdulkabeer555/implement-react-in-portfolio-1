import React, { useState } from 'react';

const OrderListSection = () => {
  const [radioValue, setRadioValue] = useState('free'); // State to track selected radio button

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  return (
    <section>
      {/* RADIO BUTTON STARTS HERE */}
      <div className="container course-form d-flex justify-content-center mt-30">
        <div className="form-check">
          <input 
            className="form-check-input form-check-input2" 
            type="radio" 
            name="flexRadioDefault" 
            id="flexRadioDefault1" 
            value="all"
            checked={radioValue === 'all'}
            onChange={handleRadioChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            ALL
          </label>
        </div>

        <div className="form-check mx-3">
          <input 
            className="form-check-input form-check-input2" 
            type="radio" 
            name="flexRadioDefault" 
            id="flexRadioDefault2" 
            value="free" 
            checked={radioValue === 'free'}
            onChange={handleRadioChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            FREE
          </label>
        </div>

        <div className="form-check">
          <input 
            className="form-check-input form-check-input2" 
            type="radio" 
            name="flexRadioDefault" 
            id="flexRadioDefault3" 
            value="paid" 
            checked={radioValue === 'paid'}
            onChange={handleRadioChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault3">
            PAID
          </label>
        </div>
      </div>
      {/* RADIO BUTTON ENDS HERE */}

      {/* ORDER LIST STARTS HERE */}
      <div className="container course-orderlist my-20 mb-70">
        <div className="row">
          <div className="col-lg-4 col-md-4 course-icon">
            <i className="bi bi-grid-3x3-gap-fill"></i>
            <i className="bi bi-list-ul"></i>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="mb-3 d-flex course-search">
              <input 
                type="text" 
                className="form-control" 
                id="formGroupExampleInput" 
                placeholder="Search"
              />
              <i className="bi bi-search"></i>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 pb-3">
            <div className="course-drop">
              <span className="px-2 p-1">Order By:</span>
              <div className="dropdown">
                <button 
                  className="btn btn-secondary dropdown-toggle" 
                  type="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ORDER LIST ENDS HERE */}
    </section>
  );
};

export default OrderListSection;
