import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import { useCallback } from "react";
import PlanEnum from "../enums/PlanEnum.ts";
import BillingEnum from "../enums/BillingEnum.ts";

const usePlanPrice = () => {
  const billing = useSelector((state: RootState) => state.billing);
  const plan = useSelector((state: RootState) => state.plan);

  const plans = [
    {
      name: "Arcade",
      priceMonthly: 9,
      priceYearly: 90,
    },
    {
      name: "Advanced",
      priceMonthly: 12,
      priceYearly: 120,
    },
    {
      name: "Pro",
      priceMonthly: 15,
      priceYearly: 150,
    },
  ];

  return useCallback(() => {
    switch (plan) {
      case PlanEnum.Arcade:
        return billing === BillingEnum.Yearly
          ? plans[0].priceYearly
          : plans[0].priceMonthly;
      case PlanEnum.Advanced:
        return billing === BillingEnum.Yearly
          ? plans[1].priceYearly
          : plans[1].priceMonthly;
      case PlanEnum.Pro:
        return billing === BillingEnum.Yearly
          ? plans[2].priceYearly
          : plans[2].priceMonthly;
      default:
        return 0;
    }
  }, [billing, plan]);
};

export default usePlanPrice;
