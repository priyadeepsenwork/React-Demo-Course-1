import { useReducer, useState } from "react";
import { Reducer, initialState } from "./CounterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [inputValue, setInputValue] = useState(0);

    const handleIncrementByAmount = () => {
        dispatch({type: 'incrementByAmount', payload: Number(inputValue)})
        setInputValue(0)
    }
    const handleDecrementByAmount = () => {
        dispatch({type: 'decrementByAmount', payload: +inputValue})
        setInputValue(0)
     }

  return (
    <section>
      <h2>Counter: {state.count}</h2>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>Add 5</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Subtract 5</button>
        <button onClick={() => dispatch({ type: "multiply" })}>Multiply 5</button>
        <button onClick={() => dispatch({ type: "divide" })}>Divide 5</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <div>
        <input 
        type="number" 
        value={inputValue} 
        onChange={e => setInputValue(e.target.value)}
        />
        <button onClick={handleIncrementByAmount}>Confirm Add</button>
        <button onClick={handleDecrementByAmount}>Confirm Subtract</button>
      </div>
    </section>
  );
};

export default Counter;
