import React from "react";
import GifItem from "./GifItem";

import "./GifList.css";
const GifList = ({ gifs }) => {
  const gifList = [];

  // take out all of the gifs
  for (let index in gifs) {
    gifList.push(gifs[index]);
  }

  // traverse all of the gif and pass data to the gifitem
  return (
    <ul className='gif-list'>
      {gifList.map(gif => (
        <GifItem gif={gif} key={gif.id} />
      ))}
    </ul>
  );
};

export default GifList;
