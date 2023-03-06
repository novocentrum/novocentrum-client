export const flex = (props) => {
  const alignItems = props?.ai || 'inherit';
  const justifyContent = props?.jc || 'inherit';
  const flexDirection = props?.fd || 'row';

  return css`
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    // Align Items
    ${alignItems === "flex-start" && `
      -webkit-box-align: start;
      -moz-box-align: start;
      -ms-flex-align: start;
    `}
    ${alignItems === "flex-end" && `
      -webkit-box-align: end;
      -moz-box-align: end;
      -ms-flex-align: end;
    `}
    ${(alignItems !== "flex-end" && alignItems !== "flex-start") && `
      -webkit-box-align: ${alignItems};
      -moz-box-align: ${alignItems};
      -ms-flex-align: ${alignItems};
    `}
    -webkit-align-items: ${alignItems};
    align-items: ${alignItems};

    // Justify Content
    ${justifyContent === "flex-start" && `
      -webkit-box-pack: start;
      -moz-box-pack: start;
      -ms-flex-pack: start;
    `}
    ${justifyContent === "flex-end" && `
      -webkit-box-pack: end;
      -moz-box-pack: end;
      -ms-flex-pack: end;
    `}
    ${justifyContent === "space-between" && `
      -webkit-box-pack: justify;
      -moz-box-pack: justify;
      -ms-flex-pack: justify;
    `}
    ${justifyContent === "space-around" && `
      -ms-flex-pack: distribute;
    `}
    ${(justifyContent !== "flex-end" && justifyContent !== "flex-start" &&
    justifyContent !== "space-between" && justifyContent !== "space-around") &&
  `
      -webkit-box-pack: ${justifyContent};
      -moz-box-pack: ${justifyContent};
      -ms-flex-pack: ${justifyContent};
    `}
    -webkit-justify-content: ${justifyContent};
    justify-content: ${justifyContent};

    // Flex Direction
    flex-direction: ${flexDirection};
    -ms-flex-direction: ${flexDirection};
    -webkit-flex-direction: ${flexDirection};
  `;
};