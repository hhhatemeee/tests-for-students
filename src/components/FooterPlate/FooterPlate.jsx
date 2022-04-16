import React, { useState } from 'react';
import Button from '../../subComponents/Button/Button';
import CurrentNumber from '../CurrentNumber/CurrentNumber';

import Timer from '../Timer/Timer';

import './FooterPlate.scss';

const FooterPlate = ({ time }) => {
  const [currentNumber, setCurrentNumber] = useState(1);
  const count = 30;

  const onHandleNextQuest = () => {
    if (currentNumber < count) {
      setCurrentNumber(currentNumber + 1);

      return;
    }

    setCurrentNumber(1);
    return;
  }

  return (
    <div className='test-plate-footer__container'>
      <div className='test-plate-footer'>
        <Timer time={time} />
        <CurrentNumber currentNumber={currentNumber} count={count} className='current-number' />
        <Button textBtn={'Ответить'} className={'test-plate-footer__button'} onClick={onHandleNextQuest} />
      </div>
    </div>
  )
}

export default FooterPlate;