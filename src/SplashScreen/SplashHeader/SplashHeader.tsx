import React from 'react';
import './SplashHeader.css';
import {ReactComponent as Illustration} from '../../assets/splashScreen/illustration1.svg';

function SplashHeader() {
  return (
    <div className='spash-header__container '>
      <div className='splash-header-body container-1920 mx-auto' id="home">
        <div className='splash-header-content'>
          <h1>
            Toynet, your new <br />
            computer networking <br />
            companion.
          </h1>
          <h3>
            learn anywhere, anytime.
          </h3>
          <button className='how-it-works'>
            <h3 className='splash-button-text'>How it works</h3>
          </button>
        </div>
        <div className='splash-header-image-container'>
          <Illustration />
        </div>
      </div>
    </div>
  );
}

export default SplashHeader;
