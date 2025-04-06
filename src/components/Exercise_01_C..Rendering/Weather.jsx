import React from "react";

const Weather = ({ temperature }) => {
  return (
    <div>
      {temperature < 15 ? (
        <h2>It's Cold outside!</h2>
      ) : temperature <= 25 ? (
        <h2>Its nice outside</h2>
      ) : (
        <h2>Its hot outside</h2>
      )}
    </div>
  );
};

export default Weather;
