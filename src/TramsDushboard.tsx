import React from "react";
import { ITramItem } from "./tramItems";
import "./TramsDushboard.css";
interface ITramDushboardProps {
  tramitem: ITramItem;
}

export const TramsDushboard: React.FC<ITramDushboardProps> = ({ tramitem }) => {
  return (
    <div className="DushBoard">
      <button>view more</button>
      <div>
        <p>ID: {tramitem.id}</p>
        <p>Tram Number: {tramitem.TramNUM}</p>
        <p>Stops: {tramitem.stops}</p>
        <p>Duration: {tramitem.Duration}</p>
      </div>
    </div>
  );
};
