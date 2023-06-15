import buttonStyles from "../../layout/Button/button.module.css";
import Button from "../../layout/Button/Button";
import Card from "../../layout/Card/Card";
import planStyles from "./plan.module.css";
import Headline from "../../layout/Headline/Headline";

type Props = {
  handleNextStep: () => void;
  handlePrevStep: () => void;
};

const plans = [
  {
    src: "../../assets/images/icon-arcade.svg",
    title: "Arcade",
    price: "$9/mo",
  },
  {
    src: "../../assets/images/icon-advanced.svg",
    title: "Advanced",
    price: "$12/mo",
  },
  {
    src: "../../assets/images/icon-pro.svg",
    title: "Pro",
    price: "$15/mo",
  },
];

const Plan = (props: Props) => {
  return (
    <div className={planStyles.planWrapper}>
      <Headline
        title="Select your plan"
        description="You have the option of monthly or yearly billing"
      />
      <div className={planStyles.optionsWrapper}>
        {plans.map((plan) => (
          <Card
            key={plan.title}
            src={plan.src}
            title={plan.title}
            price={plan.price}
          />
        ))}
      </div>
      <div>
        <p>Monthly</p>
        <input type="radio" />
        <p>Yearly</p>
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
    </div>
  );
};

export default Plan;
