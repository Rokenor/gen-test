import React from 'react';

import './styles.scss';

import Header from '../Header';
import Resend from '../Resend';
import Week from '../Week';
import Schedule from '../Schedule';
import Download from '../Download';
import Recommendations from '../Recommendations';

const App = () => {
  return (
    <div className="app_container">
      <div className="app_wrapper">
        <Header />
        <Resend />
        <Week />
        <Schedule />
        <Download />
        <Recommendations />
      </div>
    </div>
  );
}

export default App;