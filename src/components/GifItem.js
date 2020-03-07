import React from "react";
import Card from "../components/UIElements/Card";

import "./GifItem.css";

const GifItem = ({ gif }) => {
  return (
    <li className='gif-item'>
      <Card className='gif-item__content'>
        <div className='gif-item_image'>
          <img src={gif.images.original.url} alt='' />
        </div>
        <div>
          <h2 className='gif-item_info'>{gif.title}</h2>
        </div>
      </Card>
    </li>
  );
};

export default GifItem;
