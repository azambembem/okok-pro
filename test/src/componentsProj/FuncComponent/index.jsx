import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increaseButton = () => {
    setCount(count + 1);
  };
  const decreaseButton = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <button onClick={increaseButton}>Increase</button>
      {count}
      <button onClick={decreaseButton}>Decrease</button>
    </div>
  );
};
export default App;
