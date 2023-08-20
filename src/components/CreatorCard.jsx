import React from "react";
import "../styles/CreatorCard.css";

const CreatorCard = ({ creator }) => {
  console.log(creator);

  return (
    <div
      className="card-container"
      style={{ backgroundImage: `url(${creator.imageURL})` }}
    ></div>
  );
};

export default CreatorCard;
