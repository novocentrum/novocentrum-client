import React from 'react';
import {Typography, Box} from "@mui/material";
import {StyledContainer, StyledLeft} from './styled.ts';
import FeedbackButton from "../../../../../components/FeedbackButton";
import {PhoneIcon, EmailIcon} from "../../../../../themes/icons";

const Row = ({icon, text, isUnderline, isMobile}) => (
  <Box display="flex" alignItems="center" mt="12px">
    <Box
      height="24px"
      width="24px"
      mr={icon ? "12px" : 0}
      ml={isMobile ? '-24px' : 0}
    >
      {icon}
    </Box>
    <Typography
      variant="text18m"
      color="#fff"
      sx={{
        lineHeight: 0,
        textDecoration: `${isUnderline ? 'underline' : 'none' }`
      }}
    >
      {text}
    </Typography>
  </Box>
);

const FirstPart = ({
  openFeedbackModal,
  isMobile
}) => {
  return (
    <StyledContainer isMobile={isMobile}>
      <StyledLeft
        order={isMobile ? 2 : 1}
        mt={isMobile ? '24px' : 0}
        pt={isMobile ? '24px' : 0}
        isMobile={isMobile}
      >
        <Typography variant="text18b" color="#fff">
          Contacts
        </Typography>
        <Box display="flex" flexDirection={isMobile ? 'column' : 'row'}>
          <Row
            icon={<EmailIcon />}
            text="info@example.com"
            isUnderline={true}
          />
        </Box>
      </StyledLeft>
      <Box
        display="flex"
        order={isMobile ? 1 : 2}
      >
        <FeedbackButton
          clickButtonHandler={openFeedbackModal}
          isInsideFooter={true}
          fullWidth={true}
        />
      </Box>
    </StyledContainer>
  );
};

export default FirstPart;