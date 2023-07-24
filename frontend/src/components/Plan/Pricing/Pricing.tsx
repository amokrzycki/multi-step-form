import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store.ts";
import BillingEnum from "../../../enums/BillingEnum.ts";
import pricingStyles from "./pricing.module.css";
import FormType from "../../../types/FormType.ts";
import Wrapper from "../../common/layout/Wrapper/Wrapper.tsx";
import Headline from "../../common/layout/Headline/Headline.tsx";
import ClickableDiv from "../../common/layout/ClickableDiv/ClickableDiv.tsx";
import Card from "../Card/Card.tsx";
import buttonStyles from "../../common/layout/Button/button.module.css";
import Button from "../../common/layout/Button/Button.tsx";
import {
  resetAddons,
  setNextStep,
  setPlanInfo,
  setPrevStep,
} from "../../../store/appSlice.ts";
import usePlanPrice from "../../../hooks/usePlanPrice.ts";
import BillingSwitch from "../BillingSwitch/BillingSwitch.tsx";
import GetFormData from "../../../hooks/getFormData.ts";
import plans from "../../../constans/Plans.ts";

const Pricing = () => {
  const formData: FormType = GetFormData();
  let checked = formData.billing === BillingEnum.Yearly;
  const dispatch: AppDispatch = useDispatch();
  const getPrice = usePlanPrice();
  const billingPrice = getPrice();

  useEffect(() => {
    dispatch(
      setPlanInfo({
        billingPrice: billingPrice,
        billing: formData.billing as BillingEnum,
        plan: formData.plan,
      })
    );
  }, [billingPrice, dispatch]);

  const handlePrevClick = () => {
    dispatch(setPrevStep());
    window.history.back();
  };

  const handleNextClick = () => {
    dispatch(setNextStep());
  };

  const handlePlanClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    dispatch(
      setPlanInfo({
        billingPrice: formData.billingPrice,
        billing: formData.billing as BillingEnum,
        plan: e.currentTarget.children[0].id,
      })
    );
  };

  const handleBillingSwitch: React.ChangeEventHandler<
    HTMLLabelElement
  > = () => {
    checked = !checked;
    dispatch(
      setPlanInfo({
        billingPrice: billingPrice,
        billing: checked ? BillingEnum.Yearly : BillingEnum.Monthly,
        plan: formData.plan,
      })
    );
    dispatch(resetAddons());
  };

  return (
    <Wrapper>
      <Headline
        title="Select your plan"
        description="You have the option of monthly or yearly billing"
      />
      {/* PLAN OPTIONS */}
      <div className={pricingStyles.optionsWrapper}>
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
      {/* BILLING TYPE SWITCH */}
      <BillingSwitch checked={checked} handleSwitch={handleBillingSwitch} />
      {/* NAVIGATION */}
      <div className={buttonStyles.navigationWrapper}>
        <Button
          text="Go back"
          color="transparent"
          textColor="hsl(231, 11%, 63%)"
          click={handlePrevClick}
        />
        <Button
          text="Next Step"
          color="hsl(213, 96%, 18%)"
          textColor="white"
          disabled={formData.plan === ""}
          href="/step3"
          click={handleNextClick}
        />
      </div>
    </Wrapper>
  );
};

export default Pricing;
