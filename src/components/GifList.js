import React from "react";
import GifItem from "./GifItem";

import "./GifList.css";
const GifList = ({ gifs }) => {
  const gifList = [];

  for (let index in gifs) {
    gifList.push(gifs[index]);
  }

  return (
    <ul className='gif-list'>
      {gifList.map(gif => (
        <GifItem gif={gif} />
      ))}
    </ul>
  );
};

export default GifList;
