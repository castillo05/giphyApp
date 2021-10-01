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
          {image.length <= 0 && (
            <img
              className="rounded mx-auto d-block pre-show"
              src="https://media2.giphy.com/media/26gsxasQCBItsbH4k/giphy.gif?cid=ecf05e474w83uu4282pgbwyc7xjzixsaf6f8mi0v09eun8zv&rid=giphy.gif&ct=g"
              alt="Spinner"
            ></img>
          )}
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
