import useFetch from "./Fetching";
const Parent_Custom_Hooks = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      <h2>Data</h2>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
};

export default Parent_Custom_Hooks;
