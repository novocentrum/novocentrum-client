import React, {useEffect, useRef, useState} from 'react';
import ArticleItem from "./components/ArticleItem";
import ControlButtons from "./components/ControlButtons";
import {StyledArticlesContainer} from "./styled.ts";

const ArticlesList = ({articles}) => {
  const ref = useRef();
  const [scrollTop, setScrollTop] = useState(0);

  const blockHeight = ref.current?.offsetHeight;
  const scrollHeight = ref.current?.scrollHeight - blockHeight || 366;
  const isDisabledUpButton = scrollTop === 0;
  const isDisabledDownButton = scrollTop - 5 > scrollHeight;

  return (
    <>
      <StyledArticlesContainer
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
        onIconClick={() => {
          console.log('111')
        }}
      />
    </>
  );
};

export default ArticlesList;