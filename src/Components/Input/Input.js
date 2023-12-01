import React from "react";
import { InputCuston, BoxInput, MensageValid } from "./styles";

const Input = ({ name, placeholder, onChange, type, valid, mensageValid }) => {
  const textValid = mensageValid || false;
  return (
    <BoxInput>
      <InputCuston
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        valid={valid}
      />
      <MensageValid>{valid ? textValid : null}</MensageValid>
    </BoxInput>
  );
};

export default Input;
