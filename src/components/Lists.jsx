const Lists = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const userInfo = [
    {
      first_name: "Priyadeep",
      last_name: "Sen",
    },
    {
      first_name: "Jishu",
      last_name: "SenGupta",
    },
    {
      first_name: "Sourav",
      last_name: "Chowdhury",
    },
  ];
  return (
    <main>
      <div>
        {numbers.map((num) => (
          <ul key={num}>
            <li>{num}</li>
          </ul>
        ))}
      </div>
      <div>
        {userInfo.map(({first_name, last_name}) => (
          <ul key={first_name + last_name}>
            <li>{first_name}</li>
            <li>{last_name}</li>
          </ul>
        ))}
      </div>
    </main>
  );
};

export default Lists;
