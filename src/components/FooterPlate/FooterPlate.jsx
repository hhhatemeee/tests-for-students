import React, { useState } from 'react';
import Button from '../../subComponents/Button/Button';
import CurrentNumber from '../CurrentNumber/CurrentNumber';

import Timer from '../Timer/Timer';

import './FooterPlate.scss';

const FooterPlate = ({ time, currentNumber, count, onHandleNextQuest, }) => {
  return (
    <div className='test-plate-footer__container'>
      <div className='test-plate-footer'>
        <Timer time={time} />
        <CurrentNumber currentNumber={currentNumber} count={count} className='current-number' />
        <Button textBtn={'Ответить'} className={'test-plate-footer__button'} onClick={onHandleNextQuest} />
      </div>
      <Button className='test-plate-footer__end-text' textBtn={'Завершить тест'} />
    </div>
  )
}

export default FooterPlate;