import { useState, useEffect } from "react";

const useStorage = (category) => {
  const [state, setstate] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("categories")) {
      const data = localStorage.getItem("categories");
      const newListCategories = data.split(",");
      if (category.length > 0) {
        console.log(category);
        newListCategories.push(category[0]);
        localStorage.setItem("categories", newListCategories);
      }
      setstate(newListCategories);
    } else {
      localStorage.setItem("categories", category);
      const data = localStorage.getItem("categories");
      const newListCategories = data.split(",");
      setstate(newListCategories);
    }
  }, [category]);
  return state;
};

export default useStorage;
