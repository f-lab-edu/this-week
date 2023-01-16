import React from 'react';

import Title from 'components/title/title';
import MainContainer from 'components/container/mainContainer';

// Todo: 상세보기 구현시 컴포넌트 연결
const LastWeekReviews = () => {
  return (
    <MainContainer>
      <Title text="지난주 회고보기" />
    </MainContainer>
  );
};

export default LastWeekReviews;
