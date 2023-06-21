import React, { Dispatch } from "react";
import FormType from "../../types/FormType";
import Info from "../Info/Info";
import Plan from "../Plan/Plan";
import Summary from "../Summary/Summary";
import Confirmation from "../Confirmation/Confirmation";
import Fallback from "../Fallback/Fallback";
import formStyles from "./form.module.css";
import { setStep } from "../../store/actions";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import Addons from "../Addons/Addons";

interface Props {
  prev: () => void;
  next: () => void;
  step: number;
  formData: FormType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheck: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean[];
  setProperlyFilled: Dispatch<React.SetStateAction<boolean>>;
  alertOpen: boolean;
  setAlertOpen: Dispatch<React.SetStateAction<boolean>>;
}

const Form: React.FC<Props> = ({
  prev,
  next,
  step,
  formData,
  handleChange,
  handleCheck,
  checked,
  setProperlyFilled,
  alertOpen,
  setAlertOpen,
}: Props) => {
  const dispatch: AppDispatch = useDispatch();
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
  const [activePlanId, setActivePlanId] = React.useState("");

  const handleTempData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempData({
      ...tempData,
      [e.target.name]: e.target.value,
    });
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
          handleNextStep={next}
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
          handleNextStep={next}
          handlePrevStep={prev}
          checked={billingTypeChecked}
          billingUpdate={setBillingTypeChecked}
          formData={formData}
          activePlan={activePlanId}
          setActivePlan={setActivePlanId}
          alertOpen={alertOpen}
          setAlertOpen={setAlertOpen}
        />
      ),
    },
    {
      number: 3,
      component: (
        <Addons
          handleNextStep={next}
          handlePrevStep={prev}
          change={handleCheck}
          checked={checked}
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
          handlePrevStep={prev}
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
    <div id="form-wrapper" className={formStyles.formWrapper}>
      {renderStep()}
    </div>
  );
};

export default Form;
