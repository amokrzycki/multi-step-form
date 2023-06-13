import wrapperStyles from "../modules/wrappers.module.css";
import Button from "./Button";

type Props = {
  handleConfirm: () => void;
  handlePrevStep: () => void;
};

const Summary = (props: Props) => {
  return (
    <div id="summary-wrapper">
      <h1>Finishing up</h1>
      <p>Double-chech everything looks OK before confirming</p>
      <div id="options-wrapper">
        <div>
          <img src="../../assets/images/icon-arcade.svg" />
          <p>Arcade</p>
          <p>$9/mo</p>
        </div>
        <div>
          <img src="../../assets/images/icon-arcade.svg" />
          <p>Arcade</p>
          <p>$9/mo</p>
        </div>
        <div>
          <img src="../../assets/images/icon-arcade.svg" />
          <p>Arcade</p>
          <p>$9/mo</p>
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
          text="Confirm"
          color="hsl(213, 96%, 18%)"
          textColor="white"
          click={props.handleConfirm}
        />
      </div>
    </div>
  );
};

export default Summary;
