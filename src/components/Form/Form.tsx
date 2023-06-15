import React from "react";
import Info from "../Info/Info";
import Addons from "../Addons/Addons";
import Summary from "../Summary/Summary";
import Plan from "../Plan/Plan";
import Confirmation from "../Confirmation/Confirmation";
import formStyles from "./form.module.css";
import FormInterface from "../../interfaces/FormInterface";

type Props = {
  prev: () => void;
  next: () => void;
  confirm: () => void;
  step: number;
  formData: FormInterface;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Form: React.FC<Props> = (props: Props) => {
  const renderStep = () => {
    switch (props.step) {
      case 1:
        return <Info handleNextStep={props.next} change={props.handleChange} />;
      case 2:
        return <Plan handleNextStep={props.next} handlePrevStep={props.prev} />;
      case 3:
        return (
          <Addons handleNextStep={props.next} handlePrevStep={props.prev} />
        );
      case 4:
        return (
          <Summary handleConfirm={props.confirm} handlePrevStep={props.prev} />
        );
      case 5:
        return <Confirmation />;
      default:
        return null;
    }
  };

  return (
    <div id="form-wrapper" className={formStyles.formWrapper}>
      {renderStep()}
    </div>
  );
};

export default Form;
