import React from "react";
import { useContext } from "react";
import { NameContext } from "./Prop_driller_importer";

const Component_A3 = () => {
  const {name, name2} = useContext(NameContext)

  return (
    <section>
      <div>
        <h2>My name is: {name}</h2>
        <h2>My mentor's name is: {name2}</h2>
      </div>
    </section>
  );
};

export default Component_A3;
