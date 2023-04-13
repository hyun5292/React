import React from "react";
import { Outlet } from "react-router-dom";

const Factory = (props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Factory;
