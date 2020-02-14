import React, { useState } from 'react';
import { validateEmail } from '../../utils/common';

import './styles.scss';

const Resend = () => {
  const [ email, setEmail ] = useState('');
  const [ isEmailValid, setIsEmailValid ] = useState(true);
  const [ isVisible, setIsVisible ] = useState(true);

  const inputHandler = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(validateEmail(e.target.value));
  };

  const closeHandler = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  let containerClassName = isVisible? 'resend_container' : 'resend_container resend_container_hidden';
  let inputClassName = isEmailValid ? 'resend_input' : 'resend_input resend_input_error';

  return (
    <div className={containerClassName}>
      <a 
        className='resend_close'
        href="/"
        onClick={closeHandler}
      >{""}</a>
      <p className="resend_text">Enter email if you wish to resend the meal plan link</p>
      <form className="resend_form" action="">
        <input 
          className={inputClassName} 
          type="text" 
          placeholder="E-mail" 
          value={email}
          onChange={inputHandler}
        />
        <button className="resend_button">Resend</button>
      </form>
    </div>
  )
}

export default Resend;