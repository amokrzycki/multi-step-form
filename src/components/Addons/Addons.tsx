import Button from "../../layout/Button/Button";
import buttonStyles from "../../layout/Button/button.module.css";

type Props = {
  handleNextStep: () => void;
  handlePrevStep: () => void;
};

const Addons = (props: Props) => {
  return (
    <div id="addons-wrapper">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enchance your gaming experience</p>
      <div id="addons-pick-wrapper">
        <div>
          <input type="select" />
          <p>Online service</p>
          <p>Access to multiplayer games</p>
          <p>+$1/mo</p>
        </div>
        <div>
          <input type="select" />
          <p>Larger storage</p>
          <p>Extra 1TB of cloud save</p>
          <p>+$2/mo</p>
        </div>
        <div>
          <input type="select" />
          <p>Customizable Profile</p>
          <p>Custom theme on your profile</p>
          <p>+$2/mo</p>
        </div>
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

export default Addons;
