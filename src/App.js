import React from 'react';
import {BrowserRouter, Route, Routes  } from 'react-router-dom';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
   
   <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Banner />} />
          <Route path='/Banner' element={<Banner />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Education' element={<Education />} />
          <Route path='/Experience' element={<Experience />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
