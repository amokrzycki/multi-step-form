import infoStyles from "./info.module.css";
import Button from "../../layout/Button/Button";
import Headline from "../../layout/Headline/Headline";

type Props = {
  handleNextStep: () => void;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Info = (props: Props) => {
  return (
    <div id="info-wrapper" className={infoStyles.infoWrapper}>
      <Headline
        title="Personal info"
        description="Please provide your name, email address, and phone number"
      />
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        onBlur={props.change}
        placeholder="e.g Stephen King"
      />
      <label htmlFor="email">Email Address</label>
      <input
        type="text"
        name="email"
        onBlur={props.change}
        placeholder="e.g stephenking@lorem.com"
      />
      <label htmlFor="number">Phone Number</label>
      <input
        type="text"
        name="number"
        onBlur={props.change}
        placeholder="e.g +1 234 567 890"
      />
      <div className={infoStyles.navWrapper}>
        <Button
          text="Next Step"
          color="hsl(213, 96%, 18%)"
          textColor="white"
          alignSelf="end"
          click={props.handleNextStep}
        />
      </div>
    </div>
  );
};

export default Info;
