import React, { Dispatch } from "react";
import formStyles from "../Form/form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setStep } from "../../store/actions";
import Addons from "../Addons/Addons";
import Confirmation from "../Confirmation/Confirmation";
import Fallback from "../Fallback/Fallback";
import Plan from "../Plan/Plan";
import Summary from "../Summary/Summary";
import Info from "../Info/Info";
import FormType from "../../types/FormType";

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tempData: {
    name: string;
    email: string;
    number: string;
  };
  handleTempData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: FormType;
  inputValid: {
    name: boolean;
    email: boolean;
    number: boolean;
  };
  setInputValid: Dispatch<
    React.SetStateAction<{ name: boolean; email: boolean; number: boolean }>
  >;
  billingTypeChecked: boolean;
  setBillingTypeChecked: Dispatch<React.SetStateAction<boolean>>;
  setProperlyFilled: Dispatch<React.SetStateAction<boolean>>;
}

function Step({
  handleChange,
  tempData,
  handleTempData,
  formData,
  inputValid,
  setInputValid,
  billingTypeChecked,
  setBillingTypeChecked,
  setProperlyFilled,
}: Props) {
  const step = useSelector((state: RootState) => state.step);
  const dispatch: AppDispatch = useDispatch();

  const handleNextStep = () => {
    dispatch(setStep(step + 1));
  };

  const handlePrevStep = () => {
    dispatch(setStep(step - 1));
  };
  const handleFormConfirm = () => {
    dispatch(setStep(step + 1));
    console.log(formData);
  };

  const stepElements = [
    {
      number: 1,
      component: (
        <Info
          handleNextStep={handleNextStep}
          change={handleChange}
          tempData={tempData}
          handleTempData={handleTempData}
          inputValid={inputValid}
          setInputValid={setInputValid}
        />
      ),
    },
    {
      number: 2,
      component: (
        <Plan
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
          checked={billingTypeChecked}
          billingUpdate={setBillingTypeChecked}
          formData={formData}
          activePlan={formData.plan}
        />
      ),
    },
    {
      number: 3,
      component: (
        <Addons
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
          formData={formData}
          setProperlyFilled={setProperlyFilled}
        />
      ),
    },
    {
      number: 4,
      component: (
        <Summary
          handleConfirm={handleFormConfirm}
          handlePrevStep={handlePrevStep}
          formData={formData}
        />
      ),
    },
    { number: 5, component: <Confirmation /> },
  ];

  const renderStep = () => {
    const stepNumber = stepElements.find((s) => s.number === step);
    return stepNumber ? stepNumber.component : <Fallback />;
  };

  return (
    <div id="step-wrapper" className={formStyles.formWrapper}>
      {renderStep()}
    </div>
  );
}

export default Step;
