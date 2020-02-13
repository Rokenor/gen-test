import React from 'react';

import './styles.scss';

const Header = () => {
  return (
    <div className="header_container">
      <h2 className="header_h2">Personalized meal plan</h2>
      <p className="header_descr">You can also access your meal plan via email that you received.<br/>If not received, please contact <a href="mailto:supportdc@bodyfitplan.me">supportdc@bodyfitplan.me</a></p>
    </div>
  )
}

export default Header;