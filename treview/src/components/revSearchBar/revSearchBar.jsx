import React from "react";
import { BsSearch } from "react-icons/bs";

const RevSearchBar = (props) => {
  return (
    <form action="#">
      <input type="text" placeholder="" />
      <button>
        <BsSearch />
      </button>
    </form>
  );
};

export default RevSearchBar;
