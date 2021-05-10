import { useState } from "react";

const useInputValue = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
  return {
    bindValue: {
      value,
      onChange: ({ target }: any) => setValue(target.value),
    },
    clearValue: () => setValue(""),
  };
};

export default useInputValue;
