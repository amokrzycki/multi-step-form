import buttonStyles from "./button.module.css";
import classNames from "classnames";

type Props = {
  text: string;
  color: string;
  textColor: string;
  alignSelf?: string;
  click?: () => void | undefined;
  disabled?: boolean;
};

const Button = (props: Props) => {
  return (
    <button
      style={{
        backgroundColor: props.color,
        color: props.textColor,
        alignSelf: props.alignSelf,
      }}
      onClick={props.disabled ? undefined : props.click}
      className={classNames(buttonStyles.button, {
        [buttonStyles.disabled]: props.disabled,
      })}
    >
      {props.text}
    </button>
  );
};

export default Button;
