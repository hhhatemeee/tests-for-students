import React from 'react';

import { ReactComponent as Logo } from '../../assets/img/ksu-logo.svg';

import './Header.scss';


const Header = (props) => {
  return (
    <div className="test-header__container">
      <div className='test-header__menu-btn'>
        <i className='ico-menu' />
        <div className="test-header__logo">
          <Logo width={200} height={65} fill={'blue !important'} />
        </div>
      </div>
      <div className='test-header__profile'>
        <i className='ico-profile' onClick={props.onSetShowWindow} />
      </div>
    </div>
  )
}

export default Header;