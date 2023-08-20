import React from "react";
import CreatorCard from "../components/CreatorCard";

const ShowCreators = ({ influencers }) => {
  return (
    <div>
      {influencers?.map((creator) => {
        return <CreatorCard key={creator.id} creator={creator}></CreatorCard>;
      })}
    </div>
  );
};

export default ShowCreators;
