import React from "react";
import Label from "../Label/Label.tsx";

interface Props {
  name: string;
  labelText: string;
  placeholder: string;
  valid: boolean;
  errorText: string;
  value: string;
  style?: React.CSSProperties;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
}

export const FormInput: React.FC<Props> = ({
  name,
  labelText,
  errorText,
  valid,
  value,
  style,
  placeholder,
  autoFocus,
}: Props) => {
  return (
    <>
      <Label
        name={name}
        labelText={labelText}
        valid={valid}
        errorText={errorText}
      />
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        style={style}
        autoFocus={autoFocus}
      />
    </>
  );
};
