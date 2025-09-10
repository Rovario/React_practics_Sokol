import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([0]);
  const increase = () => {
    const newCount = count + 1;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  const decrease = () => {
    const newCount = count - 1;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Лічильник: {count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease} style={{ marginLeft: "10px" }}>-</button>

      <h3>Історія змін:</h3>
      <ul>
        {history.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Counter;
