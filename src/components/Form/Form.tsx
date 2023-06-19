import React from "react";
import FormInterface from "../../interfaces/FormInterface";
import {
  Info,
  Plan,
  Addons,
  Summary,
  Confirmation,
  formStyles,
  Fallback,
} from "../index";

type Props = {
  prev: () => void;
  next: () => void;
  confirm: () => void;
  step: number;
  formData: FormInterface;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheck: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean[];
};

const Form: React.FC<Props> = (props: Props) => {
  const [billingTypeChecked, setBillingTypeChecked] = React.useState(false);

  const stepElements = [
    {
      number: 1,
      component: (
        <Info handleNextStep={props.next} change={props.handleChange} />
      ),
    },
    {
      number: 2,
      component: (
        <Plan
          handleNextStep={props.next}
          handlePrevStep={props.prev}
          checked={billingTypeChecked}
          billingUpdate={setBillingTypeChecked}
        />
      ),
    },
    {
      number: 3,
      component: (
        <Addons
          handleNextStep={props.next}
          handlePrevStep={props.prev}
          change={props.handleCheck}
          checked={props.checked}
        />
      ),
    },
    {
      number: 4,
      component: (
        <Summary handleConfirm={props.confirm} handlePrevStep={props.prev} />
      ),
    },
    { number: 5, component: <Confirmation /> },
  ];

  const renderStep = () => {
    const step = stepElements.find((s) => s.number === props.step);
    return step ? step.component : <Fallback />;
  };

  return (
    <div id="form-wrapper" className={formStyles.formWrapper}>
      {renderStep()}
    </div>
  );
};

export default Form;
