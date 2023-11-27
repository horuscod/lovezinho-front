import React from 'react';
import { InputCuston } from './styles'

const Input = ({
  name,
  placeholder,
  onChange,
  type
}) => {
  return ( 
    <InputCuston
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
   );
}
 
export default Input;