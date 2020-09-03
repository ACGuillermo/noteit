import { useState } from "react";

const useControlledInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => setValue(e.target.value);

  return { value, setValue, onChange };
};

export default useControlledInput;