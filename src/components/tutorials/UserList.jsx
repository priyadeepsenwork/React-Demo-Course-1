import { Person } from "../Exercises/Person";

const UserList = () => {
  const users = [
    { id: 1, name: "Alice", age: 29 },
    { id: 2, name: "Bob", age: 32 },
    { id: 3, name: "Charles", age: 5 },
  ];

  return (
    <main>
      <Person name={users[0].name} age={users[0].age} />
      <div>
        {/* {users.map(({ name, id, age }) => (
          <ul key={name + id + age}>
            <li>{id}</li>
            <li>{name}</li>
            <li>{age}</li>
          </ul>
        ))} */}
      </div>
    </main>
  );
};

export default UserList;
