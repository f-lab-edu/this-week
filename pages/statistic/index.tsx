import Navigator from 'components/navigator/navigator';
import CurrentData from 'components/title/dateTitle';
import Title from 'components/title/title';
import { statisticTitle } from 'constants/title/habitTitle';
import MainContainer from 'components/container/mainContainer';
import HeaderContainer from 'components/container/headerContainer';

const Statistic = () => {
  return (
    <>
      <Navigator />
      <MainContainer>
        <HeaderContainer>
          <CurrentData />
          <Title text={statisticTitle} />
        </HeaderContainer>
      </MainContainer>
    </>
  );
};

export default Statistic;
