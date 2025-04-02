
const JSXRules = () => {
  const courseName = "Javascript Mastery";
  const multiply = (a, b) => a * b
  return (
    <div>
      <p>
        1) JSX must return a single parent type 2) JSX elements must be properly
        closed 3) JSX attributes are written in camelCase (eg: className insted
        of class)
      </p>
      <p> This is an expression: 2 + 2 = {2 + 2}</p>
      <p>
        {" "}
        The course name is : {courseName}
      </p>
      <p>My friends List: {['Alex', 'John']}</p>
      <p>The value of 15 * 15 = {multiply(15, 15)}</p>
    </div>
  );
};

export default JSXRules;
