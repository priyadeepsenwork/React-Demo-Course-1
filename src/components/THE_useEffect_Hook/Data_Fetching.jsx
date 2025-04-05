import React, { useEffect, useState } from "react";

const Data_Fetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) {
        setData(data);
      }
    };

    getData();
  }, []);

  return (
    <section>
      <ul>
        {data.map((todo) => (
          <div key={todo.id}>
            <li>Title -- {todo.title}</li>
            <li>Body --{todo.body}</li>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Data_Fetching;
