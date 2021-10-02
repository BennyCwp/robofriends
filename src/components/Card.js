import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="dib shadow-5 bg-light-green grow pa3 ma2 br3 bw2 tc">
      <img src={`https://robohash.org/${id}?size=300x300`} alt="robot" />
      <h2>{name}</h2>
      <span>{email}</span>
    </div>
  );
};

export default Card;
