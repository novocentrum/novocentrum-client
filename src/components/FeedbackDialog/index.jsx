import {Typography} from "@mui/material";
import React, {useState} from 'react';
import {
  StyledDialog,
  StyledInput,
  StyledTextarea,
  StyledButton
} from './styled.ts';
import SectionTitle from "../SectionTitle";

const FeedbackDialog = ({isOpen, closeModal, isMobile}) => {
  const [infoToEmail, setInfoToEmail] = useState({
    name: '',
    data: '',
    message: ''
  });

  const changeInputHandler = (event, name) => {
    setInfoToEmail({
      ...infoToEmail,
      [name]: event.target.value
    });
  };

  return (
    <StyledDialog
      open={isOpen}
      onClose={closeModal}
      isMobile={isMobile}
    >
      <SectionTitle title="Обратная связь" isMobile={isMobile} />
      <StyledInput
        type="text"
        placeholder="Имя и фамилия"
        value={infoToEmail.name}
        onChange={(e) => changeInputHandler(e, "name")}
      />
      <StyledInput
        type="text"
        placeholder="Email или телефон"
        value={infoToEmail.data}
        onChange={(e) => changeInputHandler(e, "data")}
      />
      <StyledTextarea
        type="text"
        placeholder="Сообщение"
        rows={4}
        value={infoToEmail.message}
        onChange={(e) => changeInputHandler(e, "message")}
      />
      <StyledButton onClick={() => console.log('1')}>
        <Typography variant="text18b">
          Отправить
        </Typography>
      </StyledButton>
    </StyledDialog>
  );
};

export default FeedbackDialog;