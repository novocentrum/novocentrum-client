import styled from "@emotion/styled";
import {Box, Grid} from "@mui/material";

export const StyledBackdrop = styled(Box)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px 0 0 24px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  border-radius: 8px;
  opacity: 0;
  transition: all 0.25s ease-in-out;
`;

export const StyledZoomButton = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 134px;
  padding: 0 24px;
  border: 2px solid #fff;
  border-radius: 8px;
  transition: all 0.8s ease-in-out;
`;

export const StyledWrapper = styled(Grid)`
  position: relative;
  border-radius: 8px;
  cursor: pointer;
  
  :hover > div {
    opacity: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }
`;