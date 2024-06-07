import React from 'react';

import './App.css';
import Navbar from './layouts/NavbarAndFooter/Navbar';
import Footer from './layouts/NavbarAndFooter/Footer';
import HomePage from './layouts/NavbarAndFooter/HomePage/HomePage';

function App() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <Footer/>
    </>
  );
}

export default App;
