import React, { useEffect, useState } from "react";

const FetchDataEffect = () => {
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
      <div>
        <h2>First post title: </h2>
        {data.length > 0 ? <h2>{data[0].title}</h2> : <p>Loading ...</p>}
      </div>
    </section>
  );
};

export default FetchDataEffect;
