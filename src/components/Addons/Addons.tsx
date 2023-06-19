import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { setFormData } from "../../store/actions";
import {
  Button,
  buttonStyles,
  Headline,
  Select,
  Wrapper,
  selectStyles,
} from "../../layout/";
import addonsStyles from "./addons.module.css";
import BillingEnum from "../../enums/BillingEnum";
import FormInterface from "../../interfaces/FormInterface";

type Props = {
  handleNextStep: () => void;
  handlePrevStep: () => void;
  checked: boolean[];
  change: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: FormInterface;
};

const addonsTypes = [
  "Online service",
  "Larger storage",
  "Customizable profile",
] as const;

// function calculates the total price of all the addons selected
const calculateTotal: () => number[] = () => {
  const checkedAddons = document.getElementsByClassName(selectStyles.active);
  const prices: number[] = [];
  for (let i = 0; i < checkedAddons.length; i++) {
    prices.push(parseFloat(checkedAddons[i].children[1].children[1].innerHTML));
  }
  return prices;
};

const Addons = ({
  handleNextStep,
  handlePrevStep,
  checked,
  change,
  formData,
}: Props) => {
  const dispatch: AppDispatch = useDispatch();
  // list of addons
  const addonsList = [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      priceMonthly: 1,
      priceYearly: 10,
      value: addonsTypes,
    },
    {
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      priceMonthly: 2,
      priceYearly: 20,
      value: addonsTypes,
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      priceMonthly: 2,
      priceYearly: 20,
      value: addonsTypes,
    },
  ];

  return (
    <Wrapper>
      <Headline
        title="Pick add-ons"
        description="Add-ons help enchance your gaming experience"
      />
      <div className={addonsStyles.addonsPickWrapper}>
        {addonsList.map((addon, index) => (
          <Select
            key={index}
            name={addon.name}
            description={addon.description}
            price={
              formData.billing === BillingEnum[0]
                ? addon.priceMonthly
                : addon.priceYearly
            }
            checked={checked[index]}
            change={(e) => change(index, e)}
            value={addon.value[index]}
            billing={formData.billing}
          />
        ))}
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
          click={() => {
            const prices = calculateTotal();
            dispatch(
              setFormData({
                ...formData,
                ["prices"]: [...formData.prices, ...prices],
                ["total"]:
                  formData.billingPrice + prices.reduce((a, b) => a + b, 0),
              })
            );
            handleNextStep();
          }}
        />
      </div>
    </Wrapper>
  );
};

export default Addons;
