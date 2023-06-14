import React from 'react';
import { ReactComponent as MoonIcon } from './../assets/icons/moon-icon.svg';

const TheHeader = ({ handleThemeSwitch }) => {
  return (
    <header>
      <h1>Where in the world?</h1>

      <div className='dark-mode' onClick={handleThemeSwitch}>
        <MoonIcon /> Dark Mode
      </div>
    </header>
  );
};

export default TheHeader;
