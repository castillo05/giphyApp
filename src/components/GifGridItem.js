import React from "react";

const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__bounceIn">
      <p>{title}</p>
      <img src={url} alt={title}></img>
    </div>
  );
};

export default GifGridItem;
