import circleStyles from "./circle.module.css";
import classNames from "classnames";

type Props = {
  number: string;
  filled: boolean;
};

const Circle = (props: Props) => {
  return (
    <div
      className={classNames(circleStyles.circle, {
        [circleStyles.filled]: props.filled,
      })}
    >
      <span className={circleStyles.number}>{props.number}</span>
    </div>
  );
};

export default Circle;
