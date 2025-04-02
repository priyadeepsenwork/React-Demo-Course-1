import React from "react";
import JSXRules from "./JSXRules";
import Greeting from "./Greeting";
import ProductInfo from "./ProductInfo";
import Lists from "./Lists";
import UserList from "./UserList";

const MainContent = () => {
  return (
    <main>
      <h2>Main Content</h2>
      <p className="text">I love Japan and i am planning to visit next year.</p>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Enter Your Name" />
      </form>
      {/* <JSXRules />
      <Greeting />
      <Lists /> */}

      <ProductInfo />
      <UserList />
    </main>
  );
};

export default MainContent;
