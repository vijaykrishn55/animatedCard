import React from "react";
import Card from "../Card/Card";
import { Data } from "../Data/index";
import "./AnimatedCard.css";

function AnimatedCard() {
  return (
    <div className="cards-container">
      {Data.map((item, index) => (
        <Card
          key={index}
          className="card"
          style={{
            paddingTop: `calc(${index + 1} * 0.5em)`,
            zIndex: Data.length - index, // <-- Higher z-index for upper cards
          }}
          {...item}
        />
      ))}
    </div>
  );
}

export default AnimatedCard;
