import React from 'react';

import './styles.scss';
import arrow from './images/select@2x.png';

const Week = () => {
  return (
    <div className="week_container">
      <a className="week_button" href="/">Week1 <img src={arrow} alt="Arrow"/></a>
    </div>
  )
}

export default Week;