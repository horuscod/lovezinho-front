import React from "react";
import { ContainerStyled } from "./StyledContainer";

const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
