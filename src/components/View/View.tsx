import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Form from "../Form/Form";
import viewStyles from "./view.module.css";

const View = () => {
  const [step, setStep] = useState<number>(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div id="container" className={viewStyles.container}>
      <div id="view-wrapper" className={viewStyles.viewWrapper}>
        <Sidebar />
        <Form prev={handlePrevStep} next={handleNextStep} step={step} />
      </div>
    </div>
  );
};

export default View;
