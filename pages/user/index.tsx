import Navigator from 'components/navigator/navigator';

import Title from 'components/title/title';
import { USER_TITLE } from 'constants/title/habitTitle';
import MainContainer from 'components/container/mainContainer';
import HeaderContainer from 'components/container/headerContainer';

const User = () => {
  return (
    <>
      <Navigator />
      <MainContainer>
        <HeaderContainer>
          <Title text={USER_TITLE} />
        </HeaderContainer>
      </MainContainer>
    </>
  );
};

export default User;
