import React from 'react';
import { ReactComponent as MoonIcon } from './../assets/icons/moon-icon.svg';

const TheHeader = () => {
  return (
    <div className='header'>
      <h1>Where in the world?</h1>

      <div className='dark-mode'>
        <MoonIcon /> Dark Mode
      </div>
    </div>
  );
};

export default TheHeader;
