import React from 'react';
import {StyledInput} from "./styled.ts";

const InputField = (props) => {
  const {value, onChange, placeholder, backgroundColor, mask} = props;

  return (
    <StyledInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      backgroundColor={backgroundColor}
      mask={mask}
    />
  );
};

export default InputField;