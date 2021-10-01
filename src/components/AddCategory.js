import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  const handleClear = () => {
    localStorage.clear("categories");
    setCategories([]);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form className="row g-3 " onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Buscar Gif"
            />
          </form>
        </div>
        <div className="col">
          <button
            onClick={handleClear}
            type="button"
            className="btn btn-primary"
          >
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
export default AddCategory;
