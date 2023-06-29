import Button from "../../layout/Button/Button";
import Headline from "../../layout/Headline/Headline";
import Wrapper from "../../layout/Wrapper/Wrapper";
import infoStyles from "./info.module.css";
import React from "react";
import { setEmail, setName, setNumber } from "../../store/actions.ts";
import { AppDispatch } from "../../store/store.ts";
import { useDispatch } from "react-redux";
import { FormInput } from "../../layout/FormInput/FormInput.tsx";

interface Props {
  handleNextStep: () => void;
}

// const nameExpression = /^[a-zA-Z]+ [a-zA-Z]+$/;
// const emailExpression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
// const phoneExpression = /^\+[1-9][0-9]{1,14}$/;

const Info = ({ handleNextStep }: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const handleInfoFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    if (name === "name") {
      dispatch(setName(value));
    }
    if (name === "email") {
      dispatch(setEmail(value));
    }
    if (name === "number") {
      dispatch(setNumber(value));
    }
  };

  return (
    <Wrapper>
      <Headline
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />
      <FormInput
        name="name"
        labelText="Name"
        placeholder="e.g Stephen King"
        valid={true}
        errorText="Please provide properly name!"
        value={""}
        onChange={handleInfoFormChange}
        autoFocus={true}
      />
      <FormInput
        name="email"
        labelText="Email Address"
        placeholder="e.g stephenking@lorem.com"
        valid={true}
        errorText="Please provide properly email address!"
        value={""}
        onChange={handleInfoFormChange}
      />
      <FormInput
        name="number"
        labelText="Phone Number"
        placeholder="e.g +1234567890"
        valid={true}
        errorText="Please provide properly phone number!"
        value={""}
        onChange={handleInfoFormChange}
      />
      <div className={infoStyles.navWrapper}>
        <Button
          text="Next Step"
          color="hsl(213, 96%, 18%)"
          textColor="white"
          alignSelf="end"
          click={handleNextStep}
          disabled={false}
        />
      </div>
    </Wrapper>
  );
};

export default Info;
