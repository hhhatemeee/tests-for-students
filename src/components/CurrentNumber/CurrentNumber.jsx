import React from 'react';

import './CurrentNumber.scss';

const CurrentNumber = ({ currentNumber, count, className }) => {
  console.log(currentNumber);
  return (
    <div className={`test-plate-form-number-container ${className ?? ''}`}>
      <div className='test-plate-form-number__current'>
        {currentNumber}
      </div>
      <div className='test-plate-form-number__count'>
        / {count}
      </div>
    </div>
  )
}

export default CurrentNumber