import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifts";
const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    (async () => {
      const data = await getGifs(category);
      setstate({ loading: false, data: data });
    })();
  }, [category]);

  return state;
};

export default useFetchGifs;
