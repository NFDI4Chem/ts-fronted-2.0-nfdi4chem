import React, { Component } from "react";
import SearchResult from "./SearchResult";
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const data = [
  {
    name: "google",
    url: "https://www.google.com/"
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/"
  },
  {
    name: "sandbox",
    url: "https://codesandbox.io/"
  }
];

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      result: []
    };
  }

  handleClick = e => {
    const value = e.target.value;
    const filter =
      value.length > 0 ? data.filter(web => web.name.includes(value)) : [];
    this.setState({
      search: value,
      result: filter
    });
  };

  render() {
    const result =
      this.state.result.length > 0 ? (
        <SearchResult result={this.state.result} />
      ) : null;
    return (
      <div className="search">
        <div className="search-bar">
          <input
            type="text"
            onChange={this.handleClick}
            value={this.state.search}
            className="search-input"
            placeholder="Search Here..."
          />
          <SearchIcon color="primary"></SearchIcon>
        </div>
        {result}
      </div>
    );
  }
}

export default SearchBar;
