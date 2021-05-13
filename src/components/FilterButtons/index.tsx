import React from 'react';
import { nanoid } from 'nanoid';
import FILTER_BUTTONS_NAME from 'helpers/Constants';
import './index.scss';

const FilterButtons = ({ onFilter }: any) => {
  const handleFilter = (item: string) => () => onFilter(item);

  return (
    <div className="filter-buttons">
      {
      FILTER_BUTTONS_NAME.map((btn) => (
        <button
          key={`id${nanoid()}`}
          className="filter-buttons__btn btn"
          onClick={handleFilter(btn)}
        >
          {btn}
        </button>
      ))
    }
    </div>
  );
};

export default FilterButtons;
