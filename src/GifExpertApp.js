import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  //   const handleAdd = () => {
  //     //   setCategories([...categories, "Dragon Ball"]);
  //     setCategories((cats) => [...categories, "Dragon Ball"]);
  //   };

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr></hr>

      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category}></GifGrid>
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
