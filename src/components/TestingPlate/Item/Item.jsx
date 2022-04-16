import React, { useState } from 'react';

import './Item.scss';

const Item = ({ question, id }) => {
  const [isChecked, setChecked] = useState(false);

  const onClick = () => {
    setChecked(!isChecked);
  }

  return (
    <div className='test-plate__item' onClick={onClick}>
      <input type="checkbox" name="" id={`ch_${id}`} checked={isChecked} onChange={onClick} />
      <label for={`ch_${id}`} />
      {question}
    </div>
  )
}

export default Item;