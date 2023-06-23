import React, { Dispatch, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import BillingEnum from "../../enums/BillingEnum";
import planStyles from "./plan.module.css";
import FormType from "../../types/FormType";
import Alert from "../Alert/Alert";
import Wrapper from "../../layout/Wrapper/Wrapper";
import Headline from "../../layout/Headline/Headline";
import ClickableDiv from "../../layout/ClickableDiv/ClickableDiv";
import Card from "../../layout/Card/Card";
import buttonStyles from "../../layout/Button/button.module.css";
import Button from "../../layout/Button/Button";
import iconAdvanced from "./iconAdvanced.svg";
import iconPro from "./iconPro.svg";
import iconArcade from "./iconArcade.svg";
import { setBilling, setBillingPrice, setPlan } from "../../store/actions";

interface Props {
  handleNextStep: () => void;
  handlePrevStep: () => void;
  checked: boolean;
  billingUpdate: Dispatch<React.SetStateAction<boolean>>;
  formData: FormType;
}

enum PlanEnum {
  Arcade = "Arcade",
  Advanced = "Advanced",
  Pro = "Pro",
}

const plansMonthly = [
  {
    src: iconArcade,
    title: "Arcade",
    priceMonthly: 9,
    priceYearly: 90,
    type: PlanEnum.Arcade,
  },
  {
    src: iconAdvanced,
    title: "Advanced",
    priceMonthly: 12,
    priceYearly: 120,
    type: PlanEnum.Advanced,
  },
  {
    src: iconPro,
    title: "Pro",
    priceMonthly: 15,
    priceYearly: 150,
    type: PlanEnum.Pro,
  },
];

const Plan = ({
  handleNextStep,
  handlePrevStep,
  checked,
  billingUpdate,
  formData,
}: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const [alertOpen, setAlertOpen] = React.useState(false);
  const stateUpdatedRef = useRef(false);

  const handleBillingPrice = () => {
    switch (formData.plan) {
      case PlanEnum.Arcade:
        dispatch(
          setBillingPrice(
            checked ? plansMonthly[0].priceYearly : plansMonthly[0].priceMonthly
          )
        );
        break;
      case PlanEnum.Advanced:
        dispatch(
          setBillingPrice(
            checked ? plansMonthly[1].priceYearly : plansMonthly[1].priceMonthly
          )
        );
        break;
      case PlanEnum.Pro:
        dispatch(
          setBillingPrice(
            checked ? plansMonthly[2].priceYearly : plansMonthly[2].priceMonthly
          )
        );
        break;
      default:
        break;
    }
  };

  const handlePlanClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    dispatch(setPlan(e.currentTarget.children[0].id));
  };

  const handleBillingSwitch: React.ChangeEventHandler<
    HTMLLabelElement
  > = () => {
    billingUpdate((prevState) => {
      const newState = !prevState;
      stateUpdatedRef.current = true;
      return newState;
    });
  };

  useEffect(() => {
    if (stateUpdatedRef.current) {
      dispatch(setBilling(checked ? BillingEnum.Yearly : BillingEnum.Monthly));
      stateUpdatedRef.current = false;
    }
  }, [checked, dispatch]);

  const handleNextStepClick = () => {
    if (formData.plan === "") {
      setAlertOpen(true);
      return;
    } else {
      handleBillingPrice();
      handleNextStep();
    }
  };

  return (
    <Wrapper>
      <Headline
        title="Select your plan"
        description="You have the option of monthly or yearly billing"
      />
      <div className={planStyles.optionsWrapper}>
        {plansMonthly.map((plan, index) => (
          <ClickableDiv key={index} onClick={handlePlanClick}>
            <Card
              src={plan.src}
              title={plan.title}
              price={checked ? plan.priceYearly : plan.priceMonthly}
              id={plan.type}
              billing={formData.billing}
              isActive={formData.plan === plan.type}
            />
          </ClickableDiv>
        ))}
      </div>
      <div className={planStyles.switchWrapper}>
        <p className={!checked ? planStyles.active : planStyles.inactive}>
          Monthly
        </p>
        <label className={planStyles.switch} onChange={handleBillingSwitch}>
          <input type="checkbox" defaultChecked={checked} />
          <span className={`${planStyles.slider} ${planStyles.round}`}></span>
        </label>
        <p className={checked ? planStyles.active : planStyles.inactive}>
          Yearly
        </p>
      </div>
      <div className={buttonStyles.navigationWrapper}>
        <Button
          text="Go back"
          color="transparent"
          textColor="hsl(231, 11%, 63%)"
          click={handlePrevStep}
        />
        <Button
          text="Next Step"
          color="hsl(213, 96%, 18%)"
          textColor="white"
          click={handleNextStepClick}
        />
      </div>
      <Alert
        type="warning"
        text="Please select a plan"
        open={alertOpen}
        set={setAlertOpen}
      />
    </Wrapper>
  );
};

export default Plan;
