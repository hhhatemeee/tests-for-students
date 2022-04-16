import React, { useState } from 'react';
import Button from '../../../subComponents/Button/Button';
import InputCustom from '../../../subComponents/Input/Input';

import './AuthorizationWindow.scss';

const AuthorizationWindow = ({ title, onClose }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isErrorLogin, setErrorLogin] = useState(false);
  const [isErrorPassword, setErrorPassword] = useState(false);

  const sendLoginData = () => {
    if (!login.trim()) {
      setErrorLogin(true);

      return;
    }

    if (!password.trim()) {
      setErrorPassword(true);

      return;
    }
  }

  const onChangeLogin = (e) => {
    setErrorLogin(false);
    setLogin(e.target.value);
  };

  const onChangePassword = (e) => {
    setErrorPassword(false);
    setPassword(e.target.value);
  };

  console.log('render');
  return (
    <div className='modal-window__overlay'>
      <div className='modal-window__container'>
        <div className='modal-window__header'>
          <h3>{title}</h3>
          <div className='modal-window__close' onClick={onClose}>+</div>
        </div>
        <div className='modal-window__body'>
          <div className='modal-window__login'>
            <h4>Введите имя пользователя:</h4>
            <InputCustom
              placeHolder='Имя пользователя'
              value={login}
              onChange={onChangeLogin}
              isError={isErrorLogin}
              errorText='Поле не может быть пустым'

            />
          </div>

          <h4>Введите пароль:</h4>
          <InputCustom
            placeHolder='Пароль'
            value={password}
            onChange={onChangePassword}
            type='password'
            isError={isErrorPassword}
            errorText='Поле не может быть пустым'
          />
        </div>
        <div className='modal-window__footer'>
          <Button textBtn='Войти' onClick={sendLoginData} />
        </div>
      </div>
    </div>
  )
}

export default AuthorizationWindow;