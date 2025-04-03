import React from "react";

const UserStatus = ({ loggedIn, isAdmin }) => {
  // let message
  // if(isAdmin && loggedIn) message="Welcome Admin..."
  // else if (loggedIn && !isAdmin) message = "Welcome User..."
  // else message = "Access Denied for Invalid Credentials!"
  return (
    <div>
      {loggedIn && isAdmin ? (
        <h2>Welcome Admin...</h2>
      ) : loggedIn && !isAdmin ? (
        <h2>Welcome User...</h2>
      ) : (
        <h2>Access Denied for Invalid Credentials!</h2>
      )}
    </div>
  );
};

export default UserStatus;
