import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.cardMonster.id}?set=set2&size=180x180`}
        alt="Monster"
      />
      <h2>{props.cardMonster.name}</h2>
      <p>{props.cardMonster.email}</p>
    </div>
  );
};
