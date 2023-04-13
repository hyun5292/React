import React from "react";
import { Outlet } from "react-router-dom";

const User = (props) => {
  return (
    <div>
      <h1>User</h1>
      <Outlet />
    </div>
  );
};

export default User;
