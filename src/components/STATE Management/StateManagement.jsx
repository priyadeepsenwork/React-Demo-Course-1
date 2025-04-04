import { useState } from "react";

const StateManagement = () => {
  const [count, setCount] = useState(100);
  const increment = () => setCount(prev => prev + 5);
  const decrement = () => setCount(prev => prev - 5);
  const multiply = () => setCount(prev => prev * 5);
  const divide = () => setCount(prev => prev === 0 ? 0 : prev / 5);
  const reset = () => setCount(() => 100);

  //* ============================================

    const [friends, setFriends] = useState(['Jishu', 'Priyadeep'])   

    const addOneFriends = () => {
        setFriends([...friends, 'Adrian'])
    }
    const removeOneFriends = () => {
        setFriends(friends.filter(f => (f !== 'Adrian' && f !== 'HuxN')))
    }
    const updateFriends = () => {
        setFriends(friends.map(f => f === 'Adrian' ? 'HuxN' : f))
    }

    

  return (
    <section>
      <div>StateManagement ---- Learning</div>
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>ADD 5</button>
        <button onClick={decrement}>SUBTRACT 5</button>
        <button onClick={multiply}>MULTIPLY by 5</button>
        <button onClick={divide}>DIVIDE by 5</button>
        <button onClick={reset}>RESET VALUE</button>
      </div>
      <div>
        {friends.map(f => (
            <li key={Math.random()}>{f}</li>
        ))}

        <button onClick={addOneFriends}>Add new Friend</button>
        <button onClick={removeOneFriends}>Remove a Friend</button>
        <button onClick={updateFriends}>Update a Friend</button>
      </div>
      <div>

      </div>
    </section>
  );
};

export default StateManagement;
