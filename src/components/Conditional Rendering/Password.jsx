const ValidPassword = () => <h2>Valid Password...</h2>;
const InvalidPassword = () => <h2>Invalid Password!</h2>;

const Password = ({ isValid }) => {
  return isValid ? <ValidPassword /> : <InvalidPassword />;
};

export default Password;
