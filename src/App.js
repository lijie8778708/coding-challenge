import React from "react";
import SearchBar from "./components/SearchBar";
import giphyAPI, { baseParam } from "./apis/giphyAPI";
import GifList from "./components/GifList";

class App extends React.Component {
  componentDidMount() {
    this.onInputSubmit("marvel");
  }

  state = {
    gifs: [],
    selectedGif: null
  };

  // request for data
  onInputSubmit = async text => {
    const response = await giphyAPI.get("/search", {
      params: {
        ...baseParam,
        q: text
      }
    });

    this.setState({ gifs: response.data });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.onInputSubmit} />

        <div>
          <GifList gifs={this.state.gifs.data} />
        </div>
      </div>
    );
  }
}

export default App;
