import React from "react";
import JSXRules from "./JSXRules";
import Greeting from "./Greeting";
import ProductInfo from "./ProductInfo";

const MainContent = () => {
  return (
    <main>
      <h2>Main Content</h2>
      <p className="text">I love Japan and i am planning to visit next year.</p>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Enter Your Name" />
      </form>
      <JSXRules />
      <ProductInfo />
      <Greeting />
    </main>
  );
};

export default MainContent;
