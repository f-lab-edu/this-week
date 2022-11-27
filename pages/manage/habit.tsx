import Navigator from 'components/navigator/navigator';
import CurrentData from 'components/title/dateTitle';
import Title from 'components/title/title';
import { habitTitle } from 'constants/title/habitTitle';
import MainContainer from 'components/container/mainContainer';
import HeaderContainer from 'components/container/headerContainer';

const Habit = () => {
  return (
    <>
      <Navigator />
      <MainContainer>
        <HeaderContainer>
          <CurrentData />
          <Title text={habitTitle} />
        </HeaderContainer>
      </MainContainer>
    </>
  );
};

export default Habit;
