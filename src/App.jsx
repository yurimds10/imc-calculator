import { useEffect, useState } from 'react';
import style from './styles/style.css';

const App = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(0);

  const calcImc = () => {
    parseInt(height);
    parseInt(weight);

    const imc = weight / height ** height;
    setResult(imc);
  }

  
  return (
    <div className='container'>
      <div className="content-box">
        <div className="content-img">
          <img src="" alt="" />
        </div>
        <div className="content-data">
          <div className="result">
            {result}
          </div>
          <form className="form">
            <input
              type="number"
              name="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder='Your Height'
            />

            <input
              type="number"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder='Your Weight'
            />

            <button onClick={() => calcImc()}>
              Calcule
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
