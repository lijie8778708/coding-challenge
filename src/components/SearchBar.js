import React, { Component } from "react";

import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    text: ""
  };
  onChangeHandler = e => {
    this.setState({ text: e.target.value.toUpperCase() });
  };

  onInputSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
  };

  render() {
    return (
      <div className='searchBar'>
        <form onSubmit={this.onInputSubmit}>
          <div>
            <input
              className='search_input'
              placeholder='FIND YOUR GIF (CODING-CHALLENGE)'
              value={this.state.text}
              onChange={e => this.onChangeHandler(e)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
