import React from "react";
import FormType from "../../types/FormType";
import Step from "../Step/Step";

interface Props {
  formData: FormType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form: React.FC<Props> = ({ formData, handleChange }: Props) => {
  const [billingTypeChecked, setBillingTypeChecked] = React.useState(false);
  const [tempData, setTempData] = React.useState({
    name: "",
    email: "",
    number: "",
  });
  const [inputValid, setInputValid] = React.useState({
    name: true,
    email: true,
    number: true,
  });
  const [addonsChecked, setAddonsChecked] = React.useState([
    false,
    false,
    false,
  ]);

  const handleTempData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempData({
      ...tempData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Step
      handleChange={handleChange}
      tempData={tempData}
      handleTempData={handleTempData}
      formData={formData}
      inputValid={inputValid}
      setInputValid={setInputValid}
      billingTypeChecked={billingTypeChecked}
      setBillingTypeChecked={setBillingTypeChecked}
      addonsChecked={addonsChecked}
      setAddonsChecked={setAddonsChecked}
    />
  );
};

export default Form;
