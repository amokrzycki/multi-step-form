import React from "react";

type ClickableDivProps = {
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
  children: React.ReactNode;
  id?: string;
};

const ClickableDiv: React.FC<ClickableDivProps> = ({
  onClick,
  children,
  id,
}) => {
  return (
    <div id={id} onClick={onClick} style={{ cursor: "pointer" }}>
      {children}
    </div>
  );
};

export default ClickableDiv;
