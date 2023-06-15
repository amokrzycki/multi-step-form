import Button from "../../layout/Button/Button";
import buttonStyles from "../../layout/Button/button.module.css";
import Headline from "../../layout/Headline/Headline";
import Select from "../../layout/Select/Select";
import Wrapper from "../../layout/Wrapper/Wrapper";
import addonsStyles from "./addons.module.css";

type Props = {
  handleNextStep: () => void;
  handlePrevStep: () => void;
};

const addons = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    price: "+$1/mo",
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: "+$2/mo",
  },
  {
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    price: "+$2/mo",
  },
];

const Addons = (props: Props) => {
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
