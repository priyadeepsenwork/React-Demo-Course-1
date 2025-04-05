import React from "react";
import { UsersContext } from './UserContextStore'
import { useContext, useState } from "react";

const UpdateUser = () => {
  const [inputValue, setInputValue] = useState("");
  const {setName} = useContext(UsersContext);

  const handleChange = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      setName(inputValue);
      setInputValue("");
    }
  };

  return (
    <section>
      <h2>Update user name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="Enter new name"
          onChange={handleChange}
        />
        <button type="submit">CHANGE NAME</button>
      </form>
    </section>
  );
};

export default UpdateUser;
