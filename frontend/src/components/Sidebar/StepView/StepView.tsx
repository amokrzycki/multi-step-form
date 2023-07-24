import Circle from "../Circle/Circle.tsx";
import stepStyles from "./stepView.module.css";
import ClickableDiv from "../../common/layout/ClickableDiv/ClickableDiv.tsx";
import React from "react";

type Props = {
  number: string;
  title: string;
  description: string;
  filled: boolean;
  disabled?: boolean;
  click?: React.MouseEventHandler<HTMLDivElement> | undefined;
};

const StepView = (props: Props) => {
  return (
    <ClickableDiv
      id={props.number}
      onClick={props.click}
      disabled={props.disabled}
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
