import React, {useState}  from "react";
import { v4 as uuid } from "uuid";



function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState("");
  const [itemCategory,  setItemCategory] = useState("Produce");


  function handleClick(e) {
    e.preventDefault();
    
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };
    
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleClick}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={itemName}
          onChange={e => setItemName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select 
            name="category" 
            value={itemCategory}
            onChange={e => setItemCategory(e.target.value)}>

          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
