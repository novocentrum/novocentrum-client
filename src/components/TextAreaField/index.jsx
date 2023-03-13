import React from 'react';
import {StyledTextarea} from "./styled.ts";

const TextAreaField = ({value, onChange, placeholder, width, rows}) => {
  return (
    <StyledTextarea
      rows={rows? rows : 4}
      width={width}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TextAreaField;