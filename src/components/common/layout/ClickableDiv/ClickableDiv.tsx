import React from "react";

type ClickableDivProps = {
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
  children: React.ReactNode;
  id?: string;
  disabled?: boolean;
};

const ClickableDiv: React.FC<ClickableDivProps> = ({
  onClick,
  children,
  id,
  disabled,
}) => {
  return (
    <div
      id={id}
      onClick={disabled ? undefined : onClick}
      style={{ cursor: "pointer" }}
    >
      {children}
    </div>
  );
};

export default ClickableDiv;
