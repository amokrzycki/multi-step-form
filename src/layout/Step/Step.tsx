import Circle from "../Circle/Circle";

type Props = {
  number: string;
  title: string;
  description: string;
};

const Step = (props: Props) => {
  return (
    <div>
      <Circle number={props.number} />
      <div>
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Step;
