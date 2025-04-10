import React, { useState } from "react";
import Card from "../Card/Card";
import {Data} from "../Data/index"
import "./AnimatedCard.css";

function AnimatedCard() {
 
  return (
    <>
      <div className="animated-card-container">
        {Data.map((item, index) => {
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