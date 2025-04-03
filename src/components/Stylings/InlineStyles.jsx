import React from "react";

const InlineStyles = () => {
  const styles_constant = {
    color: "#fdb44b",
    backgroundColor: "#00204a",
    padding: "12px",
    fontFamily: "sans-serif",
  };

  return (
    <section>
      <h1 style={styles_constant}>Inline Style</h1>
    </section>
  );
};

export default InlineStyles;
