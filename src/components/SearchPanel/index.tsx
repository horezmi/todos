import React, { useState, useEffect } from "react";
import "./index.scss";

const SearchPanel = ({ onSearch }: any) => {
  const useInputValue = (defaultValue = "") => {
    const [value, setValue] = useState(defaultValue);
    return {
      bindValue: {
        value,
        onChange: ({ target }: any) => {
          setValue(target.value);
        },
      },
      clearValue: () => setValue(""),
      takeValue: () => value,
    };
  };

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
