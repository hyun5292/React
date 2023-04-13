import React from "react";
import { Outlet } from "react-router-dom";

const Review = (props) => {
  return (
    <div>
      <h1>Review</h1>
      <Outlet />
    </div>
  );
};

export default Review;
