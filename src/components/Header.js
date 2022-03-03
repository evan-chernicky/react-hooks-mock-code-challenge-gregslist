import React from "react";
import Search from "./Search";

function Header({onFilterClick}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onFilterClick={onFilterClick} />
    </header>
  );
}

export default Header;
