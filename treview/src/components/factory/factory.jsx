import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Factory = ({ factoryDB }) => {
  const navigate = useNavigate();

  const goSearch = (query) => {
    console.log("query = ", query);
    navigate(`/search`, { state: { query } });
  };

  return (
    <div>
      <Outlet context={{ goSearch }} />
    </div>
  );
};

export default Factory;
