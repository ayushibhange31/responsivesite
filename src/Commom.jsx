import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Commom = (props) => {
  return (
    <>
      <section id='header' className="d-flex align-item-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5  pt-lg-0 order-2 order-lg-1 d-flex flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> World !!</strong></h1>
                  <h2 className="my-3">
                    Jobs fill your pocket, but adventures fill your soul.
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className='btn-get-started'><i class="fa fa-phone-square fs-4" aria-hidden="true"></i> {props.btname}</NavLink>
                  </div>
                  
                </div>
                   

              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={props.imgsrc} className="img-fluid animated" alt="Commom img" />
              </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Commom;