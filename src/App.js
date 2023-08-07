import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [delay, setDelay] = useState(0);
  const [value, setValue] = useState(0);
  const [input, setInput] = useState(0);
  const [countDown, setCountDown] = useState(0);

  // Delay Handler
  const onDelayhandler = (event) => {
    setDelay(event.target.value);
  };

  const count = () => {
    if (delay > 0) {
      setCountDown(delay);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCountDown(countDown - 1);
    }, 1000);

    if (countDown === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  // Normal Increment Logic
  const handleIncrement = () => {
    setValue(value + 1);
  };

  // Normal Decrement Logic
  const handleDecrement = () => {
    setValue(value - 1);
  };

  // Delayed Increment Logic
  const handleDelayIncrement = () => {
    count();
    setTimeout(function () {
      setValue(value + 1);
    }, delay * 1000 + 1000);
  };

  // Delayed Decrement Logic
  const handleDelayDecrement = () => {
    count();
    setTimeout(function () {
      setValue(value - 1);
    }, delay * 1000 + 1000);
  };

  // Input Handler
  const onInputhandler = (event) => {
    setInput(event.target.value);
  };

  // Normal Addition Logic
  const handleAdd = () => {
    setValue(Number(value) + Number(input));
  };

  // Normal Subtraction Logic
  const handleSubtract = () => {
    setValue(Number(value) - Number(input));
  };

  // Delayed Addition Logic
  const handleDelayAdd = () => {
    count();

    setTimeout(function () {
      setValue(Number(value) + Number(input));
    }, delay * 1000 + 1000);
  };

  // Delayed Subtraction Logic
  const handleDelaySubtract = () => {
    count();

    setTimeout(function () {
      setValue(Number(value) - Number(input));
    }, delay * 1000 + 1000);
  };

  return (
    <div className="App">
      {/* Delay Input Field */}

      <div className="delay">
        <div>Delay Time</div>
        <input
          value={delay}
          placeholder="delay time"
          onChange={onDelayhandler}
        />
        <div className="countdown">Timer: {delay > 0 ? countDown : ""}</div>
      </div>

      {/* Value */}

      <div className="value">Result : {value}</div>

      {/* Increment Decrement */}

      <div>
        <div className="inc-dec">
          <button onClick={handleIncrement}>Inc</button>
          <button onClick={handleDecrement}>Dec</button>
          <button onClick={handleDelayIncrement}>delay-Inc</button>
          <button onClick={handleDelayDecrement}>delay-Dec</button>
        </div>

        {/* Manual Addition & Subtraction */}

        <div className="manual-inc-dec">
          {/* Input Field */}
          <div>
            <div>Enter Number</div>
            <input
              value={input}
              placeholder="Enter Value"
              onChange={onInputhandler}
            />
          </div>

          {/* Manual Addition and Subtraction Button */}

          <div className="manual-button">
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubtract}>Subtract</button>
            <button onClick={handleDelayAdd}>Add Delay</button>
            <button onClick={handleDelaySubtract}>Subtract Delay</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
