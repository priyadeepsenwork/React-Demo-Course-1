import React from "react";
import JSXRules from "./tutorials/JSXRules";
import Greeting from "./tutorials/Greeting";
import ProductInfo from "./tutorials/ProductInfo";
import Lists from "./tutorials/Lists";
import UserList from "./tutorials/UserList";

import { Parent_ } from "./tutorials/Parent_";
import Card_Parent from "./tutorials/Card_Parent";
import PasswordValidity from "./Conditional Rendering/PasswordValidity";
import Cart from "./Conditional Rendering/Cart";
import Parent from "./Exercise C..Rendering/Parent";

const Importer = () => {
  return (
    <main>
      {/* <JSXRules />
      <Greeting />
      <Lists />
      <Parent_ /> */}
      {/* <UserList />
      <ProductInfo />
      <Card_Parent />     */}
      {/* <PasswordValidity /> */}
      <Cart />
      <Parent />
    </main>
  );
};

export default Importer;
