import React from "react";

const UserStarRatingDisplay = ({rating}) => {

    return (
      <div className="star-rating">
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

