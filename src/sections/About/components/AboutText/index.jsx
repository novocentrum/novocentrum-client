import {Box, Typography} from "@mui/material";
import React from 'react';
import {StyledMoreButton} from "./styled.ts";
import {handleScroll} from "../../../../utils/handleScroll";

const AboutText = ({isMobile}) => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography
        variant="text14m"
        color="#000"
      >
        Проект "Новый центр Рыбарже" в городе Карловы Вары объединяет в себе 18 зданий разных размеров и функций,
        главная из которых - жилье. Проект включает техническую и транспортную инфраструктуру,
        а также создание общественных зон и т.д.
      </Typography>
      <br/>
      <Typography variant="text14m" color="#000" mb={isMobile ? "12px" : "32px"}>
        Это комплексная перепланировка "браунфилда" - района бывшего пивоваренного завода
      </Typography>
      <StyledMoreButton onClick={() => handleScroll("objects", isMobile)}>
        <Typography variant="text18b">
          Подробнее
        </Typography>
      </StyledMoreButton>
    </Box>
  );
};

export default AboutText;