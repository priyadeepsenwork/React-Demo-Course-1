export const Child_ = (props) => {
    return (
      <section>
        <h1>String: {props.name}</h1>
        <h2>Age: {props.age}</h2>
        <h2>Married? : {props.isMarried ? "Yes" : "No"}</h2>
      </section>
    );
  };
  