import { useState } from 'react';
import Image from './assets/img/trainer.png';
import Height from './components/height';
import Weight from './components/weight';
import Result from './components/result';
import style from './styles/style.css';
import Button from './components/button';

const App = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);
  
  return (
    <div className='container'>
      <div className="content-box">
        <div className="content-img"> 
          <img src={Image} alt="trainer" />
        </div>
        <div className="content-data">
          <Result result={result}/>
          <div className="form">
            <Height height={height} setHeight={setHeight}/>
            <Weight weight={weight} setWeight={setWeight}/>
            <Button weight={weight} height={height} setResult={setResult}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
