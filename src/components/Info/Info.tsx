import Button from "../../layout/Button/Button";
import Headline from "../../layout/Headline/Headline";
import Label from "../../layout/Label/Label";
import Wrapper from "../../layout/Wrapper/Wrapper";
import infoStyles from "./info.module.css";
import React, { Dispatch } from "react";

interface Props {
  tempData: { name: string; email: string; number: string };
  handleTempData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: () => void;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValid: { name: boolean; email: boolean; number: boolean };
  setInputValid: Dispatch<
    React.SetStateAction<{ name: boolean; email: boolean; number: boolean }>
  >;
}

const nameExpression = /^[a-zA-Z]+ [a-zA-Z]+$/;
const emailExpression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const phoneExpression = /^\+[1-9]{1}[0-9]{1,14}$/;

const Info = ({
  tempData,
  handleTempData,
  handleNextStep,
  change,
  inputValid,
  setInputValid,
}: Props) => {
  const validateInputs = () => {
    setInputValid({
      name: nameExpression.test(tempData.name),
      email: emailExpression.test(tempData.email),
      number: phoneExpression.test(tempData.number),
    });
  };

  const handleNextStepClick = () => {
    validateInputs();
    if (Object.values(inputValid).every((el) => el === true)) {
      handleNextStep();
    }
  };

  const validateAndChange = (
    expression: RegExp,
    value: string,
    stateKey: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValid({
      ...inputValid,
      [stateKey]: expression.test(value),
    });
    if (expression.test(value)) {
      change(e);
    }
  };

  const onBlurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "name":
        validateAndChange(nameExpression, tempData.name, e.target.name, e);
        break;
      case "email":
        validateAndChange(emailExpression, tempData.email, e.target.name, e);
        break;
      case "number":
        validateAndChange(phoneExpression, tempData.number, e.target.name, e);
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      <Headline
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />
      <Label
        name="name"
        labelText="Name"
        valid={inputValid.name}
        errorText="Please provide properly name!"
      />
      <input
        type="text"
        name="name"
        onBlur={onBlurHandler}
        placeholder="e.g Stephen King"
        onChange={handleTempData}
        value={tempData.name}
        style={{ borderColor: inputValid.name ? "" : "hsl(0, 100%, 74%)" }}
        autoFocus
      />
      <Label
        name="email"
        labelText="Email Address"
        valid={inputValid.email}
        errorText="Please provide properly email address!"
      />
      <input
        type="text"
        name="email"
        onBlur={onBlurHandler}
        placeholder="e.g stephenking@lorem.com"
        onChange={handleTempData}
        value={tempData.email}
        style={{ borderColor: inputValid.email ? "" : "hsl(0, 100%, 74%)" }}
      />
      <Label
        name="number"
        labelText="Phone Number"
        valid={inputValid.number}
        errorText="Please provide properly phone number!"
      />
      <input
        type="text"
        name="number"
        onBlur={onBlurHandler}
        placeholder="e.g +1234567890"
        onChange={handleTempData}
        value={tempData.number}
        style={{ borderColor: inputValid.number ? "" : "hsl(0, 100%, 74%)" }}
      />
      <div className={infoStyles.navWrapper}>
        <Button
          text="Next Step"
          color="hsl(213, 96%, 18%)"
          textColor="white"
          alignSelf="end"
          click={handleNextStepClick}
        />
      </div>
    </Wrapper>
  );
};

export default Info;
