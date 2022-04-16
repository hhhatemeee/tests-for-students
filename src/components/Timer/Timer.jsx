import React from 'react';
import { useTimer } from 'react-timer-hook';

import './Timer.scss';

const Timer = ({ time }) => {
  console.log(time);
  const { seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart, } = useTimer({ expiryTimestamp: time, onExpire: () => console.log('123') });

  return (
    <div className='test-plate-footer__timer-container'>
      <p>{`${minutes} : ${seconds}`}</p>
    </div>
  )
}

export default Timer;