import { createContext } from "react";
import Component_A1 from "./Component_A1";

export const NameContext = createContext()

const prop_driller_importer = () => {
  const name = "Priyadeep";
  const name2 = "Adrian";
  return (
    <main>
      <NameContext.Provider value={{name, name2}}>
        <Component_A1 />
      </NameContext.Provider>
    </main>
  );
};

export default prop_driller_importer;
