import React from 'react';
import web from "../src/Images/img1.png";
import { NavLink } from 'react-router-dom';
import Commom from './Commom';

const About = () => {
  return (
    <>
      <Commom name='Welcome to About page'
       imgsrc={web}
        visit="/contact" 
        btname="Contact Now"
        tovisit="/book"
        btnname="Book Tickets" />
        
    </>
  );
};

export default About;