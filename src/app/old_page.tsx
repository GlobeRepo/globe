import React from 'react';
import './page.css';
import Head from 'next/head';
import SignIn from '@/components/sign-in';
import Globe from '../components/globe';  // Import the Globe component

const MainPage = () => {
  return (
    <>





        {/* /* old stuff  */}
      <Head>
        <title>MyTravelGlobe</title>
      </Head>
      <header className="navbar">
          <div className="navbar-container">
            <div><p className="welcome-heading">My Travel Globe</p></div>
            <nav className="nav-links">
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
      </header>

      <main className="login-page"> 
        <div className='background-con'>
        </div>
        <div className="container">
          <div className="image">
          <div className="prompt-group">
            <p className="intro-text">Where have you been and where should you go?</p>
          </div>

          <SignIn />
          <div className="button-group">
            <button className="btn signup">Sign Up</button>
            <button className="btn login">Log in</button>
          </div>

          <p className='intro-t2'> We will show you a new way to experience the world!</p>
          </div>
        </div>
      </main>
    </>

  );
};

export default MainPage;
