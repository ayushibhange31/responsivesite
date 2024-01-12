import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import 'font-awesome/css/font-awesome.min.css';
import Home from "./Home";
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Book from './Book';
import Navbar from "./Navbar";
import Footer from './Footer';
import {Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/book" element={<Book/>}/>
    </Routes>
    <Footer/>
    </>
  );
};

export default App;