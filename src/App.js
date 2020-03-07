import React from "react";
import SearchBar from "./components/SearchBar";
import giphyAPI, { baseParam } from "./apis/giphyAPI";
import GifList from "./components/GifList";

class App extends React.Component {
  // request data in the beginning
  componentDidMount() {
    this.onInputSubmit("MARVEL");
  }

  // initialize the states
  state = {
    gifs: [],
    gifsLength: 0,
    isResult: true
  };

  // request for data
  onInputSubmit = async text => {
    this.setState({ gifsLength: 0 });
    const response = await giphyAPI.get("/search", {
      params: {
        ...baseParam,
        q: text
      }
    });

    // Pass the results to state's array
    this.setState({ gifs: response.data });

    // Some how the gifs.data can not use attrubute length, so I traverse all the elements and calculate the length
    for (let index in this.state.gifs.data) {
      this.setState({ gifsLength: this.state.gifsLength + 1 });
    }

    // Check if there is gif or not
    this.setState({ isResult: this.state.gifsLength > 0 });
  };

  // render main view
  render() {
    return (
      <div className='container'>
        <SearchBar onSubmit={this.onInputSubmit} />
        {this.state.gifsLength > 0 && (
          <h3>{this.state.gifsLength + " Results"}</h3>
        )}
        {this.state.isResult ? (
          <div>
            <GifList gifs={this.state.gifs.data} />{" "}
          </div>
        ) : (
          <h1> No Results Yet</h1>
        )}
      </div>
    );
  }
}

export default App;
