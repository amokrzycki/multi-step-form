import React, { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import BillingEnum from "../../enums/BillingEnum";
import planStyles from "./plan.module.css";
import FormType from "../../types/FormType";
import Alert from "../Alert/Alert";
import cardStyles from "../../layout/Card/card.module.css";
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
  billingUpdate: (value: boolean) => void;
  formData: FormType;
  activePlan: string;
  setActivePlan: (value: string) => void;
  alertOpen: boolean;
  setAlertOpen: Dispatch<React.SetStateAction<boolean>>;
}

const PlanEnum = ["Arcade", "Advanced", "Pro"] as const;

const plansMonthly = [
  {
    src: iconArcade,
    title: "Arcade",
    priceMonthly: 9,
    priceYearly: 90,
    type: PlanEnum,
  },
  {
    src: iconAdvanced,
    title: "Advanced",
    priceMonthly: 12,
    priceYearly: 120,
    type: PlanEnum,
  },
  {
    src: iconPro,
    title: "Pro",
    priceMonthly: 15,
    priceYearly: 150,
    type: PlanEnum,
  },
];

const Plan = ({
  handleNextStep,
  handlePrevStep,
  checked,
  billingUpdate,
  formData,
  activePlan,
  setActivePlan,
  alertOpen,
  setAlertOpen,
}: Props) => {
  const dispatch: AppDispatch = useDispatch();

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setActivePlan(e.currentTarget.children[0].id);
    const activeElements = document.getElementsByClassName(cardStyles.active);

    for (let i = 0; i < activeElements.length; i++) {
      activeElements[i].classList.remove(cardStyles.active);
    }

    e.currentTarget.children[0].classList.add(`${cardStyles.active}`);

    dispatch(setPlan(e.currentTarget.children[0].id));
  };

  const handleSwitch: React.ChangeEventHandler<HTMLLabelElement> = () => {
    billingUpdate(!checked);
    dispatch(setBilling(!checked ? BillingEnum.Monthly : BillingEnum.Yearly));
  };

  const handleNextStepClick = () => {
    if (formData.plan === "") {
      setAlertOpen(true);
      return;
    } else {
      const price = parseFloat(
        document.getElementsByClassName(cardStyles.active)[0].children[2]
          .innerHTML
      );
      dispatch(setBillingPrice(price));
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
          <ClickableDiv key={index} onClick={handleClick}>
            <Card
              src={plan.src}
              title={plan.title}
              price={!checked ? plan.priceMonthly : plan.priceYearly}
              id={plan.type[index]}
              billing={formData.billing}
              active={activePlan === plan.type[index]}
            />
          </ClickableDiv>
        ))}
      </div>
      <div className={planStyles.switchWrapper}>
        <p className={!checked ? planStyles.active : planStyles.inactive}>
          Monthly
        </p>
        <label className={planStyles.switch} onChange={handleSwitch}>
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
