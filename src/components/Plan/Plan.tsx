import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import BillingEnum from "../../enums/BillingEnum";
import planStyles from "./plan.module.css";
import FormType from "../../types/FormType";
import Wrapper from "../../layout/Wrapper/Wrapper";
import Headline from "../../layout/Headline/Headline";
import ClickableDiv from "../../layout/ClickableDiv/ClickableDiv";
import Card from "../../layout/Card/Card";
import buttonStyles from "../../layout/Button/button.module.css";
import Button from "../../layout/Button/Button";
import iconAdvanced from "./iconAdvanced.svg";
import iconPro from "./iconPro.svg";
import iconArcade from "./iconArcade.svg";
import {
  resetAddons,
  setBilling,
  setBillingPrice,
  setPlan,
} from "../../store/actions";
import classNames from "classnames";
import PlanEnum from "../../enums/PlanEnum.ts";
import usePlanPrice from "../../hooks/usePlanPrice.ts";

interface Props {
  handleNextStep: () => void;
  handlePrevStep: () => void;
  formData: FormType;
}

const plans = [
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

const Plan = ({ handleNextStep, handlePrevStep, formData }: Props) => {
  let checked = formData.billing === BillingEnum.Yearly;
  const dispatch: AppDispatch = useDispatch();
  const getPrice = usePlanPrice(formData.plan);
  const billingPrice = getPrice();

  useEffect(() => {
    dispatch(setBillingPrice(billingPrice));
  }, [billingPrice, dispatch]);

  const handlePlanClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    dispatch(setPlan(e.currentTarget.children[0].id));
  };

  const handleBillingSwitch: React.ChangeEventHandler<
    HTMLLabelElement
  > = () => {
    checked = !checked;
    dispatch(setBilling(checked ? BillingEnum.Yearly : BillingEnum.Monthly));
    dispatch(resetAddons());
  };

  return (
    <Wrapper>
      <Headline
        title="Select your plan"
        description="You have the option of monthly or yearly billing"
      />
      <div className={planStyles.optionsWrapper}>
        {plans.map((plan, index) => (
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
          <span
            className={classNames(planStyles.slider, planStyles.round)}
          ></span>
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
          click={handleNextStep}
          disabled={formData.plan === ""}
        />
      </div>
    </Wrapper>
  );
};

export default Plan;
