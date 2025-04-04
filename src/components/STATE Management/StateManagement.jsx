import { useState } from "react";
import Child_Component from "./Child_Component";
import Child_Component2 from "./Child_Component2";
import Function_StageManagement from "./Function_StageManagement";

const StateManagement = () => {
  const [count, setCount] = useState(0);
  // const increment = () => setCount((prev) => prev + 5);
  // const decrement = () => setCount((prev) => prev - 5);
  // const multiply = () => setCount((prev) => prev * 5);
  // const divide = () => setCount((prev) => (prev === 0 ? 0 : prev / 5));
  // const reset = () => setCount(() => 100);

  //* ============================================

  const [friends, setFriends] = useState(["Jishu", "Priyadeep"]);

  const addOneFriends = () => {
    setFriends([...friends, "Adrian"]);
  };
  const removeOneFriends = () => {
    setFriends(friends.filter((f) => f !== "Adrian" && f !== "HuxN"));
  };
  const updateFriends = () => {
    setFriends(friends.map((f) => (f === "Adrian" ? "HuxN" : f)));
  };

  // const [movie, setMovie] = useState({
  //     title: 'Your Name',
  //     rating: '9',
  // })

  // const handleRating = () => {
  //     setMovie({...movie, rating: 5})
  //     console.log('movie rating changed')
  // }

  const [movies, setMovies] = useState([
    { id: 1, title: "Spiderman", rating: 5 },
    { id: 2, title: "Superman", rating: 8 },
    { id: 3, title: "Ironman", rating: 6 },
  ]);

  const handleName = () => {
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...m, title: "John Wick" } : m))
    );
  };

  return (
    <section>
      <div>StateManagement ---- Learning</div>
      <div>
        {/* <h1>{count}</h1>
        <button onClick={increment}>ADD 5</button>
        <button onClick={decrement}>SUBTRACT 5</button>
        <button onClick={multiply}>MULTIPLY by 5</button>
        <button onClick={divide}>DIVIDE by 5</button>
        <button onClick={reset}>RESET VALUE</button> */}
      </div>
      <div>
        {friends.map((f) => (
          <li key={Math.random()}>{f}</li>
        ))}

        <button onClick={addOneFriends}>Add new Friend</button>
        <button onClick={removeOneFriends}>Remove a Friend</button>
        <button onClick={updateFriends}>Update a Friend</button>
      </div>
      <div>
        <ul>
          {movies.map((m) => (
            <li key={m.id}>{m.title}</li>
          ))}

          <button onClick={handleName}>Change Name</button>
        </ul>
      </div>
      <div>
        <Child_Component
          count={count}
          onClickHandler={() => setCount(count + 1)}
        />
        <Child_Component2
          count={count}
          onClickHandler={() => setCount(count - 1)}
        />
      </div>
      <div>
        <Function_StageManagement />
      </div>
    </section>
  );
};

export default StateManagement;
