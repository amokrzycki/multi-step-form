import AddonsEnum from "../enums/AddonsEnum.ts";

const addonsList = [
  {
    description: "Access to multiplayer games",
    priceMonthly: 1,
    priceYearly: 10,
    value: AddonsEnum.ONLINE_SERVICE,
  },
  {
    description: "Extra 1TB of cloud save",
    priceMonthly: 2,
    priceYearly: 20,
    value: AddonsEnum.LARGER_STORAGE,
  },
  {
    description: "Custom theme on your profile",
    priceMonthly: 2,
    priceYearly: 20,
    value: AddonsEnum.CUSTOMIZABLE_PROFILE,
  },
];

export default addonsList;