import buttonStyles from "../../layout/Button/button.module.css";
import Button from "../../layout/Button/Button";

type Props = {
  handleConfirm: () => void;
  handlePrevStep: () => void;
};

const Summary = (props: Props) => {
  return (
    <div id="summary-wrapper">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming</p>
      <div id="summary-info">
        <div>
          <p>Arcade 9$/mo</p>
          <button>Change</button>
        </div>
        <div>
          <p>Online service +$1/mo</p>
          <p>Larger storage +$2/mo</p>
        </div>
        <div>
          <p>Total +$12/mo</p>
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
