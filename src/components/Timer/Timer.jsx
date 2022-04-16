import React from 'react';
import { useTimer } from 'react-timer-hook';
import cn from 'classnames';

import './Timer.scss';

const Timer = ({ time }) => {
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
      <p className={cn({ isHurry: minutes < 3 })}>
        {`${minutes.toString().length === 1
          ? `0${minutes}`
          : `${minutes}`} 
          : ${seconds.toString().length === 1
            ? `0${seconds}`
            : `${seconds}`}`}
      </p>
    </div>
  )
}

export default Timer;