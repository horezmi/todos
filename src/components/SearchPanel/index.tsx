import React, { useEffect } from "react";
import useInputValue from "../../helpers/useInputValue";

import "./index.scss";

const SearchPanel = ({ onSearch }: any) => {
  const { bindValue, takeValue } = useInputValue("");

  useEffect(() => onSearch(takeValue()));
  
  return (
    <div className="search-panel">
      <div className="input-group">
        <input className="form-control-sm" type="text" {...bindValue} />
      </div>
    </div>
  );
};

export default SearchPanel;
