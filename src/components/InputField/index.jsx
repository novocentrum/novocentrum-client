import React from 'react';
import {StyledInput} from "./styled.ts";

const InputField = (props) => {
  const {value, name, placeholder, backgroundColor, mask, onChange} = props;

  return (
    <StyledInput
      value={value}
      name={name}
      placeholder={placeholder}
      backgroundColor={backgroundColor}
      mask={mask}
      onChange={onChange}
    />
  );
};

export default InputField;