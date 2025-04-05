// UserContext.jsx
import React, { useState } from "react";
import UserProfile from "./UserProfile";
import UpdateUser from "./UpdateUser";
import { UsersContext } from "./UserContextStore"

const UserContext = () => {
  const [name, setName] = useState("Priyadeep");

  return (
    <UsersContext.Provider value={{ name, setName }}>
      <UserProfile />
      <UpdateUser />
    </UsersContext.Provider>
  );
};

export default UserContext;
