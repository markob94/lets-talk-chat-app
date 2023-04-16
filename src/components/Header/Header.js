import React from 'react';
import logo from '../../media/logo.png'  // import the logo image file
import "./Header.css";

export default function MainHeader() {
  return (
    <header className='App-header'>
      <img src={logo} alt="Logo"/> {/* use the logo image */}
      <h1>Let's talk :)</h1>
    </header>
  );
}
