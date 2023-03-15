import {Typography} from "@mui/material";
import React, {useState} from 'react';
import {
  StyledDialog,
  StyledInput,
  StyledTextarea,
  StyledButton
} from './styled.ts';
import {SectionTitle} from "../SectionTitle";
import * as emailjs from "@emailjs/browser";

const FeedbackDialog = ({isOpen, closeModal, isMobile}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [infoToEmail, setInfoToEmail] = useState({
    name: '',
    contacts: '',
    message: ''
  });

  const isDisabledButton = isLoading ||
    !infoToEmail.name.trim() ||
    !infoToEmail.contacts.trim() ||
    !infoToEmail.message.trim();

  const changeInputHandler = (event, name) => {
    setInfoToEmail({
      ...infoToEmail,
      [event.target.name]: event.target.value
    });
  };

  const sendMail = async () => {
    let params = {
      name: infoToEmail.name,
      contacts: infoToEmail.contacts,
      message: infoToEmail.message
    };

    const serviceID = "service_pfyucpg";
    const templateID = "template_mz4755t";
    const publicKey = "pR6fAoNE4jDyajFvU";

    try {
      setIsLoading(true);
      await emailjs.send(serviceID, templateID, params, publicKey);
      setInfoToEmail({
        name: '',
        contacts: '',
        message: ''
      });
      closeModal();
    } catch (e) {
      console.error('Error: ', e)
    } finally {
      setIsLoading(false);
    }
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
        name="name"
        placeholder="Имя и фамилия"
        value={infoToEmail.name}
        onChange={(e) => changeInputHandler(e)}
      />
      <StyledInput
        type="text"
        name="contacts"
        placeholder="Email или телефон"
        value={infoToEmail.data}
        onChange={(e) => changeInputHandler(e)}
      />
      <StyledTextarea
        type="text"
        name="message"
        placeholder="Сообщение"
        rows={4}
        value={infoToEmail.message}
        onChange={(e) => changeInputHandler(e)}
      />
      <StyledButton
        onClick={sendMail}
        loading={isLoading}
        disabled={isDisabledButton}
      >
        <Typography
          variant="text18b"
        >
          {isLoading ? 'Загрузка...' : 'Отправить'}
        </Typography>
      </StyledButton>
    </StyledDialog>
  );
};

export default FeedbackDialog;