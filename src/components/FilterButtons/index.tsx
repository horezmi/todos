import React from 'react';
import { nanoid } from 'nanoid';
import { FilterButtonsPropsType } from 'types/interfaces';

import FILTER_BUTTONS_NAME from 'helpers/Constants';
import './index.scss';

const FilterButtons = ({ onFilter }: FilterButtonsPropsType) => {
  const handleFilter = (item: string) => () => onFilter(item);

  return (
    <div className="filter-buttons d-flex">
      {FILTER_BUTTONS_NAME.map((btn) => (
        <button
          key={`id${nanoid()}`}
          className="filter-buttons__btn btn p-2"
          onClick={handleFilter(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
