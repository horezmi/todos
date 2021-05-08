import React, { useState } from "react";
import "./index.scss";

const SearchPanel = ({ onSearch } : any) => {
//   const [value, setValue] = useState("");
//   const handleChange = ({ target } : any) => {
//     setValue(target.value.trim());
//     onSearch(value);
//   };
  return (
    <div className="search-panel">
      <div className="input-group">
        <input
          className="form-control-sm"
          type="text"
        //   onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchPanel;
