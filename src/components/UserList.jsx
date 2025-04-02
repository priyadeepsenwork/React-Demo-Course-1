import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "Alice", age: 29 },
    { id: 2, name: "Bob", age: 32 },
    { id: 3, name: "Charles", age: 5 },
  ];

  return (
    <main>
        <div>
            {users.map(({name, id, age}) => (
                <ul key={name + id + age}>
                    <li>{id}</li>
                    <li>{name}</li>
                    <li>{age}</li>
                </ul>
            ))}
        </div>
    </main>
  )
};

export default UserList;
