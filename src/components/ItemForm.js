import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFromData] = useState({
    name: "",
    category: "Produce",
  });
  function onChange(e) {
    e.preventDefault();
    setFromData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  function handelonSumbit(e) {
    e.preventDefault();
    onItemFormSubmit({ id: uuid(), ...formData });
  }
  return (
    <form className="NewItem" onSubmit={handelonSumbit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
        />
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={onChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
