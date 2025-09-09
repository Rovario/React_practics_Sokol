import { useState } from "react";

function App() {
  function Counter({ initialValue = 0 }) {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Кількість кліків: {count}</h2>
        <button onClick={increment} style={{ marginRight: "10px" }}>
          Збільшити
        </button>
        <button onClick={decrement}>Зменшити</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Лічильник кліків</h1>
      <Counter initialValue={5} />
    </div>
  );
}

export default App;
