import React, { useEffect } from 'react';
import useInputValue from 'helpers/Hooks/useInputValue';

import './index.scss';

const SearchPanel = ({ onSearch }: any) => {
  const { bindValue } = useInputValue('');

  const { value } = bindValue;

  useEffect(() => onSearch(value), [onSearch, value]);

  return (
    <div className="search-panel">
      <div className="input-group">
        <input
          className="form-control-sm"
          type="text"
          {...bindValue}
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchPanel;
