import React from "react";
import "./App.css";
import { TramsDushboard } from "./TramsDushboard";
import { TramItems } from "./tramItems";
import { ViewMoreButton } from "./ViewMoreButton";

export const App = () => {
  return (
    <div className="">
      <h1>TramLines</h1>
      {TramItems.map((each) => (
        <TramsDushboard tramitem={each} />
      ))}

      {/* {TramItems.map((TramItems) => (
        <TramDushboard
          key={TramItems.id}
          TramNUM={TramItems.TramNUM}
          stops={TramItems.stops}
          Duration={TramItems.Duration}
        />
      ))} */}
    </div>
  );
};
