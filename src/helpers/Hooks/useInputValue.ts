import { useState } from 'react';

const useInputValue = (defaultValue: string = '') => {
  const [value, setValue] = useState<string>(defaultValue);
  return {
    bindValue: {
      value,
      onChange: ({ target }: any) => setValue(target.value),
    },
    clearValue: () => setValue(''),
  };
};

export default useInputValue;
