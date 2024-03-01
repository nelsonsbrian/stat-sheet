import React from "react";

import { items } from "./itemList";
// id: number;
// name: string;
// slot: string;
// isWorn: boolean;
// damage: number;
// defense: number;

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Player Stat Sheet</h1>
      <h3>Stats:</h3>
      <div className="flex-hor">
        <div>Damage: 0</div>
        <div>Defense: 0</div>
      </div>
      <h3>Items:</h3>
      <div>// TODO: Insert ItemList here</div>
    </div>
  );
}
