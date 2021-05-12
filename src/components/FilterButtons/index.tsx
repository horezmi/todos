import React from 'react';
import { nanoid } from 'nanoid';

import './index.scss';

const FilterButtons = ({ onFilter }: any) => {
  const handleFilter = (item: string) => () => onFilter(item);

  const buttonsName = ['All', 'Active', 'Done'];

  const filterButtons = buttonsName.map((btn) => (
    <button
      key={`id${nanoid()}`}
      className="filter-buttons__btn btn"
      onClick={handleFilter(btn)}
    >
      {btn}
    </button>
  ));

  return <div className="filter-buttons">{filterButtons}</div>;
};

export default FilterButtons;
