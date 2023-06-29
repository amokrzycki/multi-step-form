import { useEffect } from "react";
import formStyles from "../Form/form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setLastStep, setStep } from "../../store/actions";
import Addons from "../Addons/Addons";
import Confirmation from "../Confirmation/Confirmation";
import Fallback from "../Fallback/Fallback";
import Plan from "../Plan/Plan";
import Summary from "../Summary/Summary";
import Info from "../Info/Info";
import FormType from "../../types/FormType";

interface Props {
  formData: FormType;
}

function Step({ formData }: Props) {
  const lastStep = useSelector((state: RootState) => state.lastStep);
  const step = useSelector((state: RootState) => state.step);
  const dispatch: AppDispatch = useDispatch();

  const handleNextStep = () => {
    dispatch(setStep(step + 1));
  };

  const handlePrevStep = () => {
    dispatch(setStep(step - 1));
  };

  const handleSubmit = () => {
    dispatch(setStep(step + 1));
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
      component: <Info handleNextStep={handleNextStep} />,
    },
    {
      number: 2,
      component: (
        <Plan
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
    <div id="step-wrapper" className={formStyles.formWrapper}>
      {renderStep()}
    </div>
  );
}

export default Step;
