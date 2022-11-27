import Navigator from 'components/navigator/navigator';

import Title from 'components/title/title';
import { reviewTitle } from 'constants/title/habitTitle';
import MainContainer from 'components/container/mainContainer';
import HeaderContainer from 'components/container/headerContainer';

const Statistic = () => {
  return (
    <>
      <Navigator />
      <MainContainer>
        <HeaderContainer>
          <Title text={reviewTitle} />
        </HeaderContainer>
      </MainContainer>
    </>
  );
};

export default Statistic;
