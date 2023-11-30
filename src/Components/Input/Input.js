import React from "react";
import { InputCuston, BoxInput, MensageValid } from "./styles";

const Input = ({ name, placeholder, onChange, type, mensageValid }) => {
  const textValid = mensageValid || false;
  return (
    <BoxInput>
      <InputCuston
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        valid={textValid}
      />
      <MensageValid>Prencha o campo{textValid ? textValid : null}</MensageValid>
    </BoxInput>
  );
};

export default Input;
