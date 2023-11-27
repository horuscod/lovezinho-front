import React from 'react';
import { ButtonCuston } from './styles'

const Button = ({
  type,
  text,
  onClick,
  disabled,
}) => {
  return ( 
    <ButtonCuston
      type={type}
      text={text}
      onClick={onClick}
      disabled={disabled}
      >
        {text}
    </ButtonCuston>
   );
}
 
export default Button;