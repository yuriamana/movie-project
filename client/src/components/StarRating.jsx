import React, { useState, useEffect } from "react";
import APIHandler from "../api/APIHandler";
import {useAuth} from '../auth/UserContext'
const StarRating = ({film}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [alreadyRated, setAlreadyRated] = useState(false)
    const {currentUser} = useAuth()
    useEffect(() => {
      if(currentUser) {
        APIHandler.get(`/rates/${currentUser._id}/${film}`)
        .then(() => {
          setAlreadyRated(true)
        })
        .catch(() => {
          setAlreadyRated(false)
        })
      }
    },[])

  useEffect(() => {
    if (!alreadyRated) {
      APIHandler.post('/rates/'+ film, {rate:rating, id_author: currentUser?._id, id_film: film}).then((doc) => {
        console.log('cool', doc)
      }).catch(e => console.error(e))
    }
  },[rating, film, alreadyRated])

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

