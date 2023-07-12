import Headline from "../common/layout/Headline/Headline";
import Wrapper from "../common/layout/Wrapper/Wrapper";

const Fallback = () => {
  return (
    <Wrapper>
      <Headline
        title="Something went wrong!"
        description="Brace yourself till we get the error fixed!"
      />
    </Wrapper>
  );
};

export default Fallback;
