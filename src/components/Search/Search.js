import React from "react";

import "./Search.scss";

const Search = () => {
  return (
    <form className="search">
      <input type="text" className="search__field" />
      <button className="search__submit" type="submit">
        Знайти
      </button>
    </form>
  );
};

export default Search;
