import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store.ts";
import addonsStyles from "./addons.module.css";
import BillingEnum from "../../../enums/BillingEnum.ts";
import FormType from "../../../types/FormType.ts";
import Wrapper from "../../common/layout/Wrapper/Wrapper.tsx";
import Headline from "../../common/layout/Headline/Headline.tsx";
import CheckInput from "../CheckInput/CheckInput.tsx";
import buttonStyles from "../../common/layout/Button/button.module.css";
import Button from "../../common/layout/Button/Button.tsx";
import { addAddon, removeAddon } from "../../../store/appSlice.ts";
import AddonsEnum from "../../../enums/AddonsEnum.ts";

interface Props {
  handleNextStep: () => void;
  handlePrevStep: () => void;
  formData: FormType;
}

const Addons = ({ handleNextStep, handlePrevStep, formData }: Props) => {
  const dispatch: AppDispatch = useDispatch();
  // list of addons
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

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.checked) {
      dispatch(removeAddon(e.currentTarget.value));
    } else {
      dispatch(addAddon(e.currentTarget.value));
    }
  };

  return (
    <Wrapper>
      <Headline
        title="Pick add-ons"
        description="Add-ons help enchance your gaming experience"
      />
      <div className={addonsStyles.addonsPickWrapper}>
        {/* ADDONS LIST */}
        {addonsList.map((addon, index) => (
          <CheckInput
            key={index}
            name={addon.value}
            description={addon.description}
            price={
              formData.billing === BillingEnum.Monthly
                ? addon.priceMonthly
                : addon.priceYearly
            }
            checked={formData.addonsSelected.includes(addon.value)}
            change={handleSelect}
            value={addon.value}
            billing={formData.billing}
          />
        ))}
      </div>
      {/* NAVIGATION */}
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
        />
      </div>
    </Wrapper>
  );
};

export default Addons;
