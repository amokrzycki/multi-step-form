import { useState } from "react";
import Sidebar from "./Sidebar";
import Form from "./Form";
import wrapperStyles from "../modules/wrappers.module.css";

const View = () => {
  const [step, setStep] = useState<number>(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div id="container" className={wrapperStyles.container}>
      <div id="view-wrapper" className={wrapperStyles.viewWrapper}>
        <Sidebar />
        <Form prev={handlePrevStep} next={handleNextStep} step={step} />
      </div>
    </div>
  );
};

export default View;
