import React from 'react'
import { Routes, Route } from "react-router-dom";
import Features from '../pages/Features';
import Home from '../pages/Home';
import Video from '../pages/Video';
import Plans from '../pages/Plans';

const NavPage = () => {
  return (
    <React.Fragment>
    <section>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/features" element={<Features />} />
           <Route path="/video" element={<Video />} />
           <Route path="/plans" element={<Plans />} />
        </Routes>
    
    </section>
  </React.Fragment>
  )
}

export default NavPage