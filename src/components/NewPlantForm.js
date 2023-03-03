import React, { useState } from "react";

function NewPlantForm({ plants, setPlants }) {
  const [formName, setFormName] = useState("");
  const [formImage, setFormImage] = useState("");
  const [formPrice, setFormPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formName,
        image: formImage,
        price: formPrice,
      }),
    })
      .then((res) => res.json())
      .then((newPlant) => setPlants([...plants, newPlant]));
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formImage}
          onChange={(e) => setFormImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formPrice}
          onChange={(e) => setFormPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
