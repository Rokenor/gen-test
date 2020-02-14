import React from 'react';

import './styles.scss';
import downloadImage from './images/download@2x.png';

const Download = () => {
  return (
    <div className="download_container">
      <a className="download_button" href="/">Download Exercises <img className="download_icon" src={downloadImage} alt="Download Exercises" /></a>
      <a className="download_button" href="/">Download Instructions <img className="download_icon" src={downloadImage} alt="Download Instructions" /></a>
      <a className="download_button" href="/">Download Meal Plan <img className="download_icon" src={downloadImage} alt="Download Meal Plan" /></a>
    </div>
  )
}

export default Download;