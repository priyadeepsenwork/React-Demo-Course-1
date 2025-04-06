import {useReducer} from 'react'
import {Reducer, initialState} from './CounterReducer'

const Counter = () => {
    const [state, dispatch] = useReducer(Reducer, initialState)

  return (
   <section>
        <h2>Number: {state.count}</h2>
        <button onClick={() => dispatch({ type: 'increment'})}> Add 5</button>
        <button onClick={() => dispatch({ type: 'decrement'})}> Subtract 5</button>
        <button onClick={() => dispatch({ type: 'multiply'})}> Multiply 5</button>
        <button onClick={() => dispatch({ type: 'divide'})}> Divide 5</button>
        <button onClick={() => dispatch({ type: 'reset'})}> Reset</button>
   </section>
  )
}

export default Counter