import React, {useRef, useState} from 'react';
import ArticleItem from "./components/ArticleItem";
import ControlButtons from "./components/ControlButtons";
import {StyledArticlesContainer} from "./styled.ts";

const ArticlesList = ({articles, isMobile}) => {
  const ref = useRef();
  const [scrollTop, setScrollTop] = useState(0);

  const blockHeight = ref.current?.offsetHeight;
  const scrollHeight = ref.current?.scrollHeight - blockHeight || 366;
  const isDisabledUpButton = scrollTop === 0;
  const isDisabledDownButton = isMobile
    ? scrollTop - 5 > scrollHeight
    : scrollTop - 5 > scrollHeight;
  const scrollChangeNumber = 50;

  console.log('scrollTop', scrollTop)
  console.log('scrollHeight', scrollHeight)

  const onUpIconClickHandler = () => {
    ref.current?.scrollTo({
      top: ref.current?.scrollTop - scrollChangeNumber,
      behavior: "smooth",
    });
  };

  const onDownIconClickHandler = () => {
    ref.current?.scrollTo({
      top: ref.current?.scrollTop + scrollChangeNumber,
      behavior: "smooth",
    });
  };

  return (
    <>
      <StyledArticlesContainer
        isMobile={isMobile}
        ref={ref}
        onScroll={() => {
          const scrollPosition = ref.current?.scrollTop;
          setScrollTop(scrollPosition);
        }}
      >
        {articles.map((article) => (
          <ArticleItem key={article._id} article={article} />
        ))}
      </StyledArticlesContainer>
      <ControlButtons
        isDisabledUpButton={isDisabledUpButton}
        isDisabledDownButton={isDisabledDownButton}
        onUpIconClick={onUpIconClickHandler}
        onDownIconClick={onDownIconClickHandler}
      />
    </>
  );
};

export default ArticlesList;