import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  
  const handleSubmit = (e) => {

    //stops reloading of page on form submission
    e.preventDefault();

    //'trim()'removes leading and trailing spaces from a string.
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = () => {
    setTodos(todos.slice(0, -1))
  }

  const handleChange = (e) => [setInputValue(e.target.value)];

  return (
    <section>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="add a new todo"          
        />
        <button type="submit">Add todo</button>
        <button type="submit" id="delete" onClick={handleDelete}>Delete Todo</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
