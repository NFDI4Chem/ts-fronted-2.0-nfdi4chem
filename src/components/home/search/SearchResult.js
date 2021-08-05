import React from "react";

const SearchResult = props => {
  const result = props.result.map((x, index) => {
    return (
      <li key={index}>
        <a href="#">{x.name}</a>
      </li>
    );
  });

  return (
    <div className="search-result">
      <hr />
      <ul>{result}</ul>
    </div>
  );
};

export default SearchResult;
