import { useEffect } from "react";
import stepStyles from "../Step/step.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setLastStep, setNextStep, setPrevStep } from "../../store/appSlice.ts";
import Addons from "../AddonsSelection/Addons/Addons";
import Confirmation from "../Confirmation/Confirmation";
import Fallback from "../Fallback/Fallback";
import Pricing from "../Plan/Pricing/Pricing.tsx";
import Summary from "../Summary/Summary";
import PersonalInfo from "../Info/PersonalInfo/PersonalInfo.tsx";
import FormType from "../../types/FormType";

function Step() {
  const lastStep = useSelector((state: RootState) => state.lastStep);
  const step = useSelector((state: RootState) => state.step);
  const dispatch: AppDispatch = useDispatch();

  const formData: FormType = {
    name: useSelector((state: RootState) => state.name),
    email: useSelector((state: RootState) => state.email),
    number: useSelector((state: RootState) => state.number),
    billing: useSelector((state: RootState) => state.billing),
    billingPrice: useSelector((state: RootState) => state.billingPrice),
    plan: useSelector((state: RootState) => state.plan),
    addonsSelected: useSelector((state: RootState) => state.addonsSelected),
    total: useSelector((state: RootState) => state.total),
  };

  const handleNextStep = () => {
    dispatch(setNextStep());
  };

  const handlePrevStep = () => {
    dispatch(setPrevStep());
  };

  const handleSubmit = () => {
    dispatch(setNextStep());
    console.log(formData);
  };

  useEffect(() => {
    if (step > lastStep) {
      dispatch(setLastStep(step));
    }
  }, [dispatch, lastStep, step]);

  const stepElements = [
    {
      number: 1,
      component: (
        <PersonalInfo handleNextStep={handleNextStep} formData={formData} />
      ),
    },
    {
      number: 2,
      component: (
        <Pricing
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
          formData={formData}
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
        />
      ),
    },
    {
      number: 4,
      component: (
        <Summary
          handleConfirm={handleSubmit}
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
    <div id="step-wrapper" className={stepStyles.formWrapper}>
      {renderStep()}
    </div>
  );
}

export default Step;
