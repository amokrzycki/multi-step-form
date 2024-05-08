import { useEffect, useState } from "react";

type ValidatorFn = (name: string | null) => "" | null | boolean;

const useInputField = (initialValue: string, validatorFn: ValidatorFn) => {
  const [value, setValue] = useState<string>(initialValue);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (validatorFn(value)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [value, validatorFn]);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    if (validatorFn(value)) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return {
    value,
    valid,
    handleChange,
  };
};

export default useInputField;
