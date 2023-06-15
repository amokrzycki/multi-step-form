import buttonStyles from "../../layout/Button/button.module.css";
import Button from "../../layout/Button/Button";
import Card from "../../layout/Card/Card";
import planStyles from "./plan.module.css";
import Headline from "../../layout/Headline/Headline";
import ClickableDiv from "../../layout/ClickableDiv/ClickableDiv";
import Wrapper from "../../layout/Wrapper/Wrapper";

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
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <Wrapper>
      <Headline
        title="Select your plan"
        description="You have the option of monthly or yearly billing"
      />
      <div className={planStyles.optionsWrapper}>
        {plans.map((plan, index) => (
          <ClickableDiv key={index} onClick={handleClick}>
            <Card src={plan.src} title={plan.title} price={plan.price} />
          </ClickableDiv>
        ))}
      </div>
      <div className={planStyles.switchWrapper}>
        <p>Monthly</p>
        <label className={planStyles.switch}>
          <input type="checkbox" />
          <span className={`${planStyles.slider} ${planStyles.round}`}></span>
        </label>
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
    </Wrapper>
  );
};

export default Plan;
