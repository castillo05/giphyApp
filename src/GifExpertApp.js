import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import useStorage from "./hooks/useStorage";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const storage = useStorage(categories);

  return (
    <div>
      <h2>GiphyApi-reactjs</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr></hr>

      <ol>
        {storage.map((category) => (
          <GifGrid category={category} key={category}></GifGrid>
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
