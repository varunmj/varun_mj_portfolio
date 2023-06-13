import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './routes/Home'
import Portfolio from './routes/Portfolio';
import About from './routes/About'
import Contact from './routes/Contact';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
