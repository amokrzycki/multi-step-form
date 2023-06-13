import wrapperStyles from "../modules/wrappers.module.css";
import Button from "./Button";

type Props = {
  handleNextStep: () => void;
};

const Info = (props: Props) => {
  return (
    <div id="info-wrapper" className={wrapperStyles.infoWrapper}>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number</p>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" />
      <label htmlFor="email">Email Address</label>
      <input type="text" name="email" />
      <label htmlFor="number">Phone Number</label>
      <input type="text" name="number" />
      <Button
        text="Next Step"
        color="hsl(213, 96%, 18%)"
        textColor="white"
        alignSelf="end"
        click={props.handleNextStep}
      />
    </div>
  );
};

export default Info;
