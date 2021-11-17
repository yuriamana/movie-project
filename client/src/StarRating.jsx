import React, { useState, useEffect } from "react";
import APIHandler from "./api/APIHandler";

const StarRating = ({film}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
  useEffect(() => {
    APIHandler.post('/rates/'+ film, {rating}).then((doc) => {
      console.log('cool')
    }).catch(e => console.error(e))
  },[rating, film])

    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>

          );
        })}
      </div>
    );
  };

export default StarRating

