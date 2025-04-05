import { useEffect, useState } from "react";
import Data_Fetching from "./Data_Fetching";


const One_uEffect = () => {
  const [value, setValue] = useState(0);
  const [fake, setFake] = useState(0);

//   useEffect(() => {
//     if (value >= 5) {
//       console.log("Yaaay");
//     }
//     console.log("called useEffect");
//     document.title = `Increment ${value}`;
//   }, [value]);

  return (
    <section>
      <div>
        <h2>{value}</h2>
        <button onClick={() => setValue(value + 1)}>Click me</button>
        <button onClick={() => setFake(fake + 1)}>You sure?</button>
      </div>
      <Data_Fetching />
    </section>
  );
};

export default One_uEffect;
