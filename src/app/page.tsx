import React from 'react';
import './page.css';
import Head from 'next/head';
// import { FaUser, FaLock } from "react-icons/fa";

// src/app/page.tsx

import Globe from '../components/globe';  // Import the Globe component



const MainPage = () => {
  return (
    <>
      <Head>
        <title>MyTravelGlobe</title>
      </Head>
      <header className="navbar">
          <div className="navbar-container">
            <div className="welcome-heading">My Travel Globe</div>
            <nav className="nav-links">
              <a href="#" className="links">About</a>
              <a href="#" className="links">Contact</a>
            </nav>
          </div>
      </header>
      <main className="login-page">        
        <div className="container">
          <div className="prompt-group">
            <p className="intro-text">Where have you been and where should you go? We will show you a new way to experience the world!</p>
          </div>

          <div className="button-group">
            <button className="btn signup">Sign Up</button>
            <button className="btn login">Log in</button>
          </div>
        </div>
        <p>stuff to be determined</p>
      </main>
    </>

  );
};

export default MainPage;
