import wrapperStyles from "../modules/wrappers.module.css";
import Button from "./Button";

type Props = {
  handleNextStep: () => void;
  handlePrevStep: () => void;
};

const Plan = (props: Props) => {
  return (
    <div id="plan-wrapper">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>
      <div id="options-wrapper">
        <div>
          <img src="../../assets/images/icon-arcade.svg" />
          <p>Arcade</p>
          <p>$9/mo</p>
        </div>
        <div>
          <img src="../../assets/images/icon-advanced.svg" />
          <p>Advanced</p>
          <p>$12/mo</p>
        </div>
        <div>
          <img src="../../assets/images/icon-pro.svg" />
          <p>Pro</p>
          <p>$15/mo</p>
        </div>
      </div>
      <div>
        <p>Monthly</p>
        <input type="radio" />
        <p>Yearly</p>
      </div>
      <div className={wrapperStyles.navigationWrapper}>
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
