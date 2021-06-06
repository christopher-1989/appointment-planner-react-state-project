import React from "react";

export const Tile = ({ object }) => {
  return (
    <div className="tile-container">
      {Object.values(object).map((value, index) => (
        <p key={index}>
          {value}
        </p>
      ))}
    </div>
  );
};
