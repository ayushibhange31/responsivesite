import React from 'react';
import web from "../src/Images/img2.png";
import { NavLink } from 'react-router-dom';
import Commom from './Commom';

const Home = () => {
  return (
    <>
      <Commom
       name='Book your ticket to travel the '
       imgsrc={web}
        visit="/service" 
        btname="Get Started" 
        />
    
    </>
  );
};

export default Home;