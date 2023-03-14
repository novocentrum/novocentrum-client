import {Box, Typography} from "@mui/material";
import React, {useState} from "react";
import {StyledHeader, StyledMenuItem} from "./styled.ts";
import MobileMenu from "./components/MobileMenu";
import {LogoIcon} from "../../../themes/icons.js"
import {handleScroll} from "../../../utils/handleScroll";
import FeedbackButton from "../../../components/FeedbackButton";
import './style.scss';

const Header = ({
  openFeedbackModal,
  isMobile
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const clickOnMenuHandler = () => {
    setIsOpenMenu(prev => !prev);
  };

  return (
    <StyledHeader isMobile={isMobile}>
      {isMobile && (
        <Box className={isOpenMenu ? "nav__menu open" : "nav__menu"}>
          <Box className={isOpenMenu ? "nav__content" : "nav__content"}>
            <Typography
              variant="text18b"
              color="#fff"
              mb="24px"
              onClick={() => {
                openFeedbackModal();
                clickOnMenuHandler();
              }}
            >
              Обратная связь
            </Typography>
            <Typography
              variant="text18b"
              color="#fff"
              mb="24px"
              onClick={() => {
                handleScroll("articles");
                clickOnMenuHandler();
              }}
            >
              Новости
            </Typography>
            <Typography
              variant="text18b"
              color="#fff"
              onClick={() => {
                handleScroll("gallery");
                clickOnMenuHandler();
              }}
            >
              Галерея
            </Typography>
          </Box>
        </Box>
      )}
      <Box sx={{cursor: 'pointer'}} onClick={() => handleScroll("about", isMobile)}>
        <LogoIcon />
      </Box>
      {isMobile
        ? (
          <MobileMenu
            isOpenMenu={isOpenMenu}
            clickOnMenuHandler={clickOnMenuHandler}
          />
        ) : (
          <Box display="flex" alignItems="center">
            <StyledMenuItem
              color="#fff"
              variant="text18b"
              onClick={() => handleScroll("gallery")}
            >
              Галерея
            </StyledMenuItem>
            <StyledMenuItem
              color="#fff"
              variant="text18b"
              onClick={() => handleScroll("articles")}
            >
              Новости
            </StyledMenuItem>
            <FeedbackButton clickButtonHandler={openFeedbackModal} />
          </Box>
        )
      }
    </StyledHeader>
  );
};

export default Header;