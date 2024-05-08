import buttonStyles from "./button.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

type Props = {
  text: string;
  color: string;
  textColor: string;
  alignSelf?: string;
  click?: () => void | undefined;
  disabled?: boolean;
  href?: string;
};

const Button = (props: Props) => {
  return (
    <Link to={props.href || "#"}>
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
    </Link>
  );
};

export default Button;
