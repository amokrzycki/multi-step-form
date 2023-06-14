import circleStyles from "./circle.module.css";

type Props = {
  number: string;
};

const Circle = (props: Props) => {
  return (
    <div className={circleStyles.circle}>
      <span className={circleStyles.number}>{props.number}</span>
    </div>
  );
};

export default Circle;
