import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  function onToggleAvailability() {
    return setIsSoldOut(!isSoldOut);
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isSoldOut ? (
        <button className="primary" onClick={onToggleAvailability}>
          In Stock
        </button>
      ) : (
        <button onClick={onToggleAvailability}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
