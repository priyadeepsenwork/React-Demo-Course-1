import { useReducer } from "react";

const initialState = { count: 0 };
const reducer = (state, action) => {
  //console.log(state); //an object with parameter: count
  //console.log(action); //an object with parameter: type
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    default:
      break;
  }
};

const Reducer_01 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //console.log(reducer); //function : length: 2 and name: "reducer"
  //*internally when the component renders for the first time: reducer(undefined, { type: '@@INIT' })
  //* but we also pass the useReducer. So, this tells react that:
  //? “If the state is undefined (which it is at first), use this initialState value to start things off.”

  /*
    ?       what is dispatch?
     *   -> It takes an action object like { type: 'increment' }
     *   -> Then it calls your reducer function, passing in the current state and that action
     *   -> It returns nothing (void), but causes a re-render with the updated state
    */

  return (
    <section>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}> Add 1 </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        {" "}
        Subtract 1{" "}
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </section>
  );
};

export default Reducer_01;
