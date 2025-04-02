import React from "react";

const Greeting = () => {
  const currentDate = new Date();
  const name = "Adrian JSM";
  return (
    <div>
      <h1>Welcome to Ranch</h1>
      <p>
        Name: {name} and Date today: {currentDate.getDate()}
      </p>
    </div>
  );
};

export default Greeting;
