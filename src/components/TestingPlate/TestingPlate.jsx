import React from 'react';
import Item from './Item/Item';


import './TestingPlate.scss';

const mockQues = [
  { name: 'Input', id: 0 },
  { name: 'Button', id: 1 },
  { name: 'Push', id: 2 },
  { name: 'Send', id: 3 }
];

const TestingPlate = () => {
  return (
    <div className='test-plate__container'>
      <div className='test-plate'>
        <h3 className='test-plate__title'>
          С помощью каких элементов пользователь может отправить введенные в форму данные?
        </h3>
        <div className='test-plate__questions-container'>
          <div className='test-plate__questions'>
            {
              mockQues.map((ques) => <Item key={ques.id} question={ques.name} id={ques.id} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestingPlate