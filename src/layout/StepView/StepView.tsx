import Circle from "../Circle/Circle";
import ClickableDiv from "../ClickableDiv/ClickableDiv";
import stepStyles from "./stepView.module.css";
import React from "react";

type Props = {
  number: string;
  title: string;
  description: string;
  filled: boolean;
  navigate: React.MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
};

const StepView = (props: Props) => {
  return (
    <ClickableDiv
      onClick={!props.disabled ? props.navigate : undefined}
      id={props.number}
    >
      <Circle number={props.number} filled={props.filled} />
      <div className={`${stepStyles.textContainer}`}>
        <p className={stepStyles.title}>{props.title}</p>
        <p className={stepStyles.description}>{props.description}</p>
      </div>
    </ClickableDiv>
  );
};

export default StepView;
