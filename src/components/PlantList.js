import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, plantsToDisplay }) {
  console.log(plants);
  return (
    <ul className="cards">
      {plants.map((plant) => {
        return (
          <PlantCard
            key={plant.id}
            name={plant.name}
            image={plant.image}
            price={plant.price}
          />
        );
      })}
    </ul>
  );
}

export default PlantList;
