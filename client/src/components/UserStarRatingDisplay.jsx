import React from "react";

const UserStarRatingDisplay = ({rating}) => {

  // ajouter les notes pour chaque film

  console.log(rating)
    return (
      <div className="star-rating">
      {/* if(!rating) {
        "No user's rating yet"
      } */}
        {[...Array(5)].map((star, index) => {

          return (
            <button
              type="button"
              key={index}
              className={index + 1 <= rating  ? "on" : "off"}
            >
              <span className="star">&#9733;</span>
            </button>

          );
        })}
      </div>
    );
  };

export default UserStarRatingDisplay

