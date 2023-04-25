import React from "react";
import { Outlet } from "react-router-dom";

const User = (props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default User;
