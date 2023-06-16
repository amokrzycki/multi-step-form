import React from "react";
import Button from "../../layout/Button/Button";
import buttonStyles from "../../layout/Button/button.module.css";
import Headline from "../../layout/Headline/Headline";
import Select from "../../layout/Select/Select";
import Wrapper from "../../layout/Wrapper/Wrapper";
import addonsStyles from "./addons.module.css";
import AddonsEnum from "../../enums/AddonsEnum";

type Props = {
  handleNextStep: () => void;
  handlePrevStep: () => void;
  checked: boolean[];
  change: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Addons = (props: Props) => {
  const addons = [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      price: "+$1/mo",
      value: AddonsEnum.ONLINE_SERVICE,
    },
    {
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: "+$2/mo",
      value: AddonsEnum.LARGER_STORAGE,
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      price: "+$2/mo",
      value: AddonsEnum.CUSTOMIZABLE_PROFILE,
    },
  ];

  return (
    <Wrapper>
      <Headline
        title="Pick add-ons"
        description="Add-ons help enchance your gaming experience"
      />
      <div className={addonsStyles.addonsPickWrapper}>
        {addons.map((addon, index) => (
          <Select
            key={index}
            name={addon.name}
            description={addon.description}
            price={addon.price}
            checked={props.checked[index]}
            change={(e) => props.change(index, e)}
            value={addon.value}
          />
        ))}
      </div>
      <div className={buttonStyles.navigationWrapper}>
        <Button
          text="Go back"
          color="transparent"
          textColor="hsl(213, 96%, 18%)"
          click={props.handlePrevStep}
        />
        <Button
          text="Next Step"
          color="hsl(213, 96%, 18%)"
          textColor="white"
          click={props.handleNextStep}
        />
      </div>
    </Wrapper>
  );
};

export default Addons;
