import {Typography} from "@mui/material";
import React from 'react';
import {StyledButton} from './styled.ts';

const Button = ({title = "Отправить", onClick, isLoading, disabled}) => {
  return (
    <StyledButton onClick={onClick} isLoading={isLoading} disabled={disabled}>
      <Typography variant="text18b">
        {isLoading
          ? 'Загрузка...'
          : title
        }
      </Typography>
    </StyledButton>
  );
};

export default Button;