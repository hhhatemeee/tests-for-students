import React, { useState } from 'react';
import FooterPlate from '../FooterPlate/FooterPlate';
import Item from './Item/Item';


import './TestingPlate.scss';

const mockQues = [
  {
    id: 0,
    title: 'С помощью каких элементов пользователь может отправить введенные в форму данные?',
    answers: [{ name: 'Input', id: 0 },
    { name: 'Button', id: 1 },
    { name: 'Push', id: 2, isTrue: true },
    { name: 'Send', id: 3 },
    ],
  },
  {
    id: 1,
    title: 'Какая сегодня погодка на улице ?',
    answers: [{ name: 'Норм', id: 0 },
    { name: 'Жара', id: 1 },
    { name: 'Холодно', id: 2, isTrue: true },
    { name: 'Терпимо', id: 3 },
    ],
  },
  {
    id: 2,
    title: 'Сколько нужно дней чтобы обойти землю?',
    answers: [
      { name: '332', id: 0 },
      { name: '3032', id: 1 },
      { name: '112', id: 2, isTrue: true },
      { name: '1254', id: 3 },
    ],
  }
];

const TestingPlate = ({ time }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [trueAnswers, setTrueAnswers] = useState([]);

  const count = mockQues.length;

  const onNextQuestion = (num) => {
    if (num) {
      setTrueAnswers([...trueAnswers, num]);
    }

    if (currentNumber + 1 < count) {
      setCurrentNumber(currentNumber + 1);
      return;
    }

    console.log('result: ' + trueAnswers.length);
    setCurrentNumber(0);
    return;
  }

  return (
    <div className='test-plate__container'>
      <div className='test-plate'>
        <h3 className='test-plate__title'>
          {mockQues[currentNumber].title}
        </h3>
        <div className='test-plate__questions-container'>
          <div className='test-plate__questions'>
            {
              mockQues[currentNumber].answers.map((ques) => <Item
                key={ques.id}
                question={ques.name}
                id={ques.id}
                isTrue={ques.isTrue}
              />)
            }
          </div>
        </div>
      </div>
      <FooterPlate
        time={time}
        onHandleNextQuest={onNextQuestion}
        count={count}
        currentNumber={currentNumber + 1}
      />
    </div>
  )
}

export default TestingPlate