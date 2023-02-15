import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const getCounterColor = () => {
    if (count >= 0 && count <= 4) {
      return 'green';
    } else if (count >= 5 && count <= 9) {
      return 'blue';
    } else {
      return 'red';
    }
  };

  return (
    
    <div className="App">
      <div className='counter'>
        <h1 className='number' style={{ color: getCounterColor() }}>{count}</h1>
        <button className='IncrementBtn' onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
      <div className='copyright'>
        <h3 className='name'>Made by- DIBYA JYOTI BARIK, 12013346</h3>
      </div>
    </div>
    
  );
}

export default App;