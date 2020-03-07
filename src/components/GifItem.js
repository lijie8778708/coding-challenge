import React from "react";
import Card from "../components/UIElements/Card";

import "./GifItem.css";

const GifItem = ({ gif, key }) => {
  return (
    <li
      className='gif-item'
      key={key}
      onClick={() => {
        //  Link to the source page of the fig
        window.location.href = gif.images.original.url;
      }}>
      <Card className='gif-item__content'>
        <div className='gif-item_image'>
          <img src={gif.images.original.url} alt='' />
        </div>
        <div>
          <h2 className='gif-item_info'>
            {gif.title ? gif.title.toUpperCase() : "NO TITLE FOUND"}
          </h2>

          <div>Rating: {gif.rating.toUpperCase()}</div>
        </div>
      </Card>
    </li>
  );
};

export default GifItem;
