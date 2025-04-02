import React from "react";

const JSXRules = () => {
    const courseName = 'Javascript Mastery'

  return (
    <div>
      <p>
        1) JSX must return a single parent type 2) JSX elements must be properly
        closed 3) JSX attributes are written in camelCase (eg: className insted
        of class)
      </p>
      <p> This is an expression: 2 + 2 = {2+2}</p>
      <p> The course name is : 
        <h3>{courseName}</h3>
      </p>
    </div>
  );
};

export default JSXRules;
