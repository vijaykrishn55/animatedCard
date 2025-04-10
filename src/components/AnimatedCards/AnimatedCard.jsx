import React, { useState } from "react";
import Card from "../Card/Card";
import {data} from "../data/data";
import "./AnimatedCard.css";

function AnimatedCard() {
 
  return (
    <>
      <div className="animated-card-container">
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              style={{top: `${(index * 10)}px !important`}}
              {...item}
            />
          )
        })}
      </div>
    </>
  );
}

export default AnimatedCard;