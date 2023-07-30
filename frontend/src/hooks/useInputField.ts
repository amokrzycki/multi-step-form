import { useEffect, useState } from "react";

type ValidatorFn = (value: string | null) => boolean | "" | null;

const useInputField = (
  initialValue: string | null,
  validatorFn: ValidatorFn
) => {
  const [value, setValue] = useState<string | null>(initialValue);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (validatorFn(value)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [value, validatorFn]);

  const handleChange = (newValue: string | null) => {
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
