import {Box} from "@mui/material";
import React, {useState} from "react";
import {StyledHeader, StyledMenuItem} from "./styled.ts";
import {logo} from "../../constants/logo.js"
import {handleScroll} from "../../utils/handleScroll";
import FeedbackButton from "../../components/FeedbackButton";
import FeedbackDialog from "../../components/FeedbackDialog";

const Header = ({isMobile}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openFeedbackModal = () => {
    setIsOpenModal(true);
  };

  const closeFeedbackModal = () => {
    setIsOpenModal(false);
  };

  return (
    <StyledHeader>
      {isOpenModal && (
        <FeedbackDialog
          isOpen={isOpenModal}
          closeModal={closeFeedbackModal}
          isMobile={isMobile}
        />
      )}
      <Box sx={{cursor: 'pointer'}} onClick={() => handleScroll("about", isMobile)}>
        {logo()}
      </Box>
      <Box display="flex" alignItems="center">
        <Box>
          <StyledMenuItem color="#fff" variant="text18b" onClick={() => handleScroll("articles")}>
            Новости
          </StyledMenuItem>
          <FeedbackButton clickButtonHandler={openFeedbackModal} />
        </Box>
      </Box>
    </StyledHeader>
  );
};

export default Header;