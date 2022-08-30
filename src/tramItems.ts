import React from "react";

export interface ITramItemsProps {
  id: number;
  TramNUM: number;
  stops: string[];
  Duration: number;
}
export const TramItems: ITramItemsProps[] = [
  {
    id: 1,
    TramNUM: 11,
    // from: "Preston",
    // finalDestination: "City",
    stops: ["Preston", "Thornbury", "Northcote", "City"],
    Duration: 20,
  },
  {
    id: 2,
    TramNUM: 1,
    stops: ["St kilda", "Blothen", "Velothen", "Polothen"],
    Duration: 16,
  },
  {
    id: 3,
    TramNUM: 72,
    stops: ["Port melbourn", "Julin", "Colins"],
    Duration: 5,
  },
];

// stops[0]

// stops[stops.length-1]
