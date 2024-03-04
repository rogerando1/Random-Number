import React, { useState } from 'react';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [randomNumber, setRandomNumber] = useState(null);
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');

  const handleMinChange = (e) => {
    setMin(e.target.value);
  };

  const handleMaxChange = (e) => {
    setMax(e.target.value);
  };

  const generateRandomNumber = () => {
    const minNum = parseInt(min);
    const maxNum = parseInt(max);

    if (isNaN(minNum) || isNaN(maxNum) || min === '' || max === '') {
      alert('Please enter valid numbers for both minimum and maximum.');
      return;
    }

    if (numbers.length === maxNum - minNum + 1) {
      alert('All numbers within the range have been generated.');
      return;
    }

    let newNumber;
    do {
      newNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    } while (numbers.includes(newNumber));

    setRandomNumber(newNumber);
    setNumbers([...numbers, newNumber]);
  };

  const handleReset = () => {
    setMin('');
    setMax('');
    setNumbers([]);
    setRandomNumber(null);
  };

  return (
    <div className='container'>
      <div className='header'></div>
      <div className='title'>
        <h1>Random Number Picker</h1>
      </div>
      <div className='center'>
        <div className='minmax'>
          <h2 className='label'>
            Minimum 
          </h2>
          <input
            type='text'
            id='min'
            placeholder='Input Minimum Number'
            value={min}
            onChange={handleMinChange}
          />
          <h2 className='label'>
            Maximum
          </h2>
          <input
            type='text'
            id='max'
            placeholder='Input Maximum Number'
            value={max}
            onChange={handleMaxChange}
          />
        </div>
      </div>
      <div className='genRandom'>
        <button onClick={generateRandomNumber}>
          Generate Random Number
        </button>
      </div>
      <div className='genNumber'>
        {randomNumber && <h1>{randomNumber}</h1>}
      </div>
      <div className='reset'>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
