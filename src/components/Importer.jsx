import React from "react";
import JSXRules from "./tutorials/JSXRules";
import Greeting from "./tutorials/Greeting";
import ProductInfo from "./tutorials/ProductInfo";
import Lists from "./tutorials/Lists";
import UserList from "./tutorials/UserList";

import { Parent_ } from "./tutorials/Parent_";

const Importer = () => {
  return (
    <main>
      {/* <JSXRules />
      <Greeting />
      <Lists />
      <Parent_ /> */}
      <UserList />
      <ProductInfo />    
    </main>
  );
};

export default Importer;
