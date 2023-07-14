import iconArcade from "../components/Plan/Pricing/iconArcade.svg";
import PlanEnum from "../enums/PlanEnum.ts";
import iconAdvanced from "../components/Plan/Pricing/iconAdvanced.svg";
import iconPro from "../components/Plan/Pricing/iconPro.svg";

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

export default plans;