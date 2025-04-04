import { useEffect, useState } from "react";
import React from "react";

const Function_StageManagement = () => {
  const [count, setCount] = useState(() => {
    let initialCount = 10;
    return initialCount;
  });
  const clickHandler = () => {
    setCount((prev) => prev + 1);
  };

  const [randomNumber, setRandomNumber] = useState(() => {
    return Math.floor(Math.random() * 100);
  });

  const refreshHandler = () => {
    const newNumber = Math.floor(Math.random() * 100);
    setRandomNumber(newNumber);
  };

  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const handleClearName = () => setName("")

  return (
    <section>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={clickHandler}>Increment</button>
      </div>
      <div>
        <h2>Random Number: {randomNumber}</h2>
        <button onClick={refreshHandler}>Refresh</button>
      </div>
      <div>
        <h2>Your name: {name}</h2>
        <input
          type="text"
          value={name}
          onChange={nameHandler}
          placeholder="write your new name"
        />
        <button onClick={handleClearName}>Clear Name</button>
      </div>
    </section>
  );
};

export default Function_StageManagement;
