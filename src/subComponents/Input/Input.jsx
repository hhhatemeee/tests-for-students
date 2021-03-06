import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Input.scss';

const InputCustom = ({ placeHolder, value, onChange, className, isError, errorText, type = 'text' }) => {
  return (
    <div className={cn(`input__container ${className || ''}`, { 'input__container_isError': isError })}>
      <div className={cn('input__error-message', { 'input__error-message_isShow': isError })}>
        <i className='ico-Info'></i>
        <span>{errorText}</span>
      </div>
      <input
        className={cn('input__item', { 'input__item_isError': isError })}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
};

InputCustom.propTypes = {
  placeHolder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

InputCustom.defaultProps = {
  placeHolder: '',
  value: '',
  className: '',
  onChange: () => console.log('Не опеределена функция onChange'),
};


export default InputCustom;
