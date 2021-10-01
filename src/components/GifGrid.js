import React from "react";
import { Fragment } from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: image, loading } = useFetchGifs(category);

  return (
    <Fragment>
      <h3>{category}</h3>
      {loading && "Cargando..."}
      <div className="container">
        <div className="row">
          {image.map((image) => (
            <div className="col-md-3" key={image.id}>
              <ol>
                <GifGridItem {...image} key={image.id}></GifGridItem>
              </ol>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default GifGrid;
