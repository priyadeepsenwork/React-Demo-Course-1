import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <div>
        <h2>Number: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Add number</button>
        <button onClick={() => setCount(count - 1)}>Subtract number</button>
      </div>
    </section>
  );
};

export default Counter;
