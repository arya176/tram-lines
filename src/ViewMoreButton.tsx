import React from "react";
import { useState } from "react";
import { ITramItem } from "./tramItems";
import "./ViewMoreButton.css";

interface IViewMoreButtonProps {
  stop: ITramItem;
}

export const ViewMoreButton: React.FC<IViewMoreButtonProps> = ({ stop }) => {
  const [viewMoreOpen, setViewMoreOpen] = useState<boolean>(false);
  const toggleViewMoreButton = () => {
    setViewMoreOpen(!viewMoreOpen);
  };
  return (
    <div className="ButtonDiv">
      <button className="viewButton" onClick={() => toggleViewMoreButton()}>
        View More...
      </button>
      {viewMoreOpen && (
        <div>
          <p>{stop.stops[0]}</p>
          <br></br>;<p>{stop.stops[1]}</p>
          <br></br>;<p>{stop.stops[2]}</p>
          <br></br>;<p>{stop.stops[3]}</p>
          <br></br>;<p>{stop.stops[4]}</p>
          <br></br>;<p>{stop.stops[5]}</p>
          <br></br>;<p>{stop.stops[6]}</p>;
        </div>
      )}
    </div>
  );
};
