import Button from "../../common/layout/Button/Button.tsx";
import Headline from "../../common/layout/Headline/Headline.tsx";
import Wrapper from "../../common/layout/Wrapper/Wrapper.tsx";
import infoStyles from "./personalInfo.module.css";
import { AppDispatch } from "../../../store/store.ts";
import { useDispatch } from "react-redux";
import { FormInput } from "../FormInput/FormInput.tsx";
import { setNextStep, setUserData } from "../../../store/appSlice.ts";
import useFormValidator from "../../../hooks/useFormValidator.ts";
import useInputField from "../../../hooks/useInputField.ts";
import getFormData from "../../../hooks/getFormData.ts";

const PersonalInfo = () => {
  const formData = getFormData();
  const dispatch: AppDispatch = useDispatch();
  const [nameValidator, emailValidator, numberValidator] = useFormValidator();
  const nameInputField = useInputField(
    formData.name ? formData.name : "",
    nameValidator.validate
  );
  const emailInputField = useInputField(
    formData.email ? formData.email : "",
    emailValidator.validate
  );
  const numberInputField = useInputField(
    formData.number ? formData.number : "",
    numberValidator.validate
  );
  const isFormValid =
    nameInputField.valid && emailInputField.valid && numberInputField.valid;

  const handleNextClick = () => {
    dispatch(setNextStep());
    dispatch(
      setUserData({
        name: nameInputField.value,
        email: emailInputField.value,
        number: numberInputField.value,
      })
    );
  };

  return (
    <Wrapper>
      <Headline
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />
      {/* FORM */}
      <FormInput
        name="name"
        labelText="Name"
        placeholder="e.g Stephen King"
        valid={nameInputField.valid}
        errorText="Please provide properly name!"
        value={nameInputField.value || ""}
        onChange={(e) => nameInputField.handleChange(e.target.value)}
        autoFocus={true}
      />
      <FormInput
        name="email"
        labelText="Email Address"
        placeholder="e.g stephenking@lorem.com"
        valid={emailInputField.valid}
        errorText="Please provide properly email address!"
        value={emailInputField.value || ""}
        onChange={(e) => emailInputField.handleChange(e.target.value)}
      />
      <FormInput
        name="number"
        labelText="Phone Number"
        placeholder="e.g +1234567890"
        valid={numberInputField.valid}
        errorText="Please provide properly phone number!"
        value={numberInputField.value || ""}
        onChange={(e) => numberInputField.handleChange(e.target.value)}
      />
      {/* NAVIGATION */}
      <div className={infoStyles.navWrapper}>
        <Button
          text="Next Step"
          color="hsl(213, 96%, 18%)"
          textColor="white"
          alignSelf="end"
          disabled={!isFormValid}
          href="/step2"
          click={handleNextClick}
        />
      </div>
    </Wrapper>
  );
};

export default PersonalInfo;
