import { useState } from 'react';
import './App.scss';
import FooterPlate from './components/FooterPlate/FooterPlate';
import Header from './components/Header/Header';
import AuthorizationWindow from './components/ModalWindow/AuthorizationWindow/AuthorizationWindow';
import TestingPlate from './components/TestingPlate/TestingPlate';

function App() {
  const [showWindow, setShowWindow] = useState(false);

  const onSetShowWindow = () => setShowWindow(!showWindow);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 189);

  return (
    <div className="App">
      {
        showWindow && <AuthorizationWindow
          title={'Авторизация'}
          onClose={onSetShowWindow}
        />
      }
      <Header onSetShowWindow={onSetShowWindow} />
      <div className='test__line' />
      <TestingPlate time={time} />
    </div>
  );
}

export default App;
