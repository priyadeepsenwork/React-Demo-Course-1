export const Child_ = ({ img, name, age, isMarried, hobbies }) => {
  return (
    <section>
      <img src={img} alt={name} width={200} />
      <h1>String: {name}</h1>
      <h2>Age: {age}</h2>
      <h2>Married? : {isMarried ? "Yes" : "No"}</h2>
      <h2>Hobbies: {hobbies}</h2>
    </section>
  );
};
