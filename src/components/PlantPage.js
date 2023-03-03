import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("Z");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((plants) => setPlants(plants));
  }, []);

  const plantsToDisplay = plants.filter((plant) => plant.name.includes(search));

  function handleSearchChange(newSearch) {
    return setSearch(newSearch);
  }

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search
        plants={plants}
        search={search}
        onSearchChange={handleSearchChange}
      />
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
