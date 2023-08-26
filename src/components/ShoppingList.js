import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchBar, setSearchBar] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  function onSearchChange(event){
      setSearchBar(event.target.value)
      //console.log(searchBar)
  }

  const itemsToDisplay = items.filter((item) => {
  

     if (selectedCategory === "All" && searchBar === "") return true;
     const searchMatch = item.name.toLowerCase().includes(searchBar.toLowerCase())
     const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
     return categoryMatch && searchMatch


    //  const itemsToDisplay = items
    //  // category
    //  .filter(
    //    (item) => selectedCategory === "All" || item.category === selectedCategory
    //  )
    //  // search term
    //  .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  });


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={searchBar}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
