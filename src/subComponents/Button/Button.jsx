import React from 'react';

import './Button.scss';

const Button = ({ textBtn, className, onClick }) => {
  return (
    <div className={`custom-button__container ${className ?? ''}`} onClick={onClick}>
      {textBtn}
    </div>
  )
}

export default Button;