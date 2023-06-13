import React from "react";
import wrapperStyles from "../modules/wrappers.module.css";
import Info from "./Info";
import Addons from "./Addons";
import Summary from "./Summary";
import Plan from "./Plan";
import Confirmation from "./Confirmation";

type Props = {
  prev: () => void;
  next: () => void;
  step: number;
};

const Form: React.FC<Props> = (props: Props) => {
  const renderStep = () => {
    switch (props.step) {
      case 1:
        return <Info handleNextStep={props.next} />;
      case 2:
        return <Plan handleNextStep={props.next} handlePrevStep={props.prev} />;
      case 3:
        return (
          <Addons handleNextStep={props.next} handlePrevStep={props.prev} />
        );
      case 4:
        return (
          <Summary handleConfirm={props.next} handlePrevStep={props.prev} />
        );
      case 5:
        return <Confirmation />;
      default:
        return null;
    }
  };

  return (
    <div id="form-wrapper" className={wrapperStyles.formWrapper}>
      {renderStep()}
    </div>
  );
};

export default Form;
