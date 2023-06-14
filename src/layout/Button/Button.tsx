type Props = {
  text: string;
  color: string;
  textColor: string;
  alignSelf?: string;
  click?: () => void;
};

const Button = (props: Props) => {
  return (
    <button
      style={{
        backgroundColor: props.color,
        width: "7em",
        borderRadius: "0.6em",
        padding: "1em",
        color: props.textColor,
        fontFamily: "Ubuntu",
        alignSelf: props.alignSelf,
        fontWeight: 500,
      }}
      onClick={props.click}
    >
      {props.text}
    </button>
  );
};

export default Button;
