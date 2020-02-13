import React from 'react';

import './styles.scss';

const Resend = () => {
  return (
    <div className="resend_container">
      <a className="resend_close" href="/"></a>
      <p className="resend_text">Enter email if you wish to resend the meal plan link</p>
      <form className="resend_form" action="">
        <input className="resend_input" type="text" placeholder="E-mail" />
        <button className="resend_button">Resend</button>
      </form>
    </div>
  )
}

export default Resend;