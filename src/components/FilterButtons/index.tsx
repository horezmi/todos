import React from "react";

import "./index.scss";

const FilterButtons = ({ onFilter }: any) => {
  const handleFilter = (item : string) => () => onFilter(item);

  const buttonsName = [
    'All', 'Active', 'Done'
  ];

  const filterButtons = buttonsName.map(btn => {
    return (
      <button
        className="filter-buttons__btn btn"
        onClick={handleFilter(btn)}
      >
        {btn}
      </button>
    )
  })

  return (
    <div className="filter-buttons">
      <div className="filter-buttons__btns">
        {filterButtons}
      </div>
    </div>
  );
};

export default FilterButtons;
