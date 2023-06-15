import Circle from "../Circle/Circle";
import stepStyles from "./step.module.css";

type Props = {
  number: string;
  title: string;
  description: string;
  filled: boolean;
};

const Step = (props: Props) => {
  return (
    <div>
      <Circle number={props.number} filled={props.filled} />
      <div className={`${stepStyles.textContainer}`}>
        <p className={stepStyles.title}>{props.title}</p>
        <p className={stepStyles.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default Step;
