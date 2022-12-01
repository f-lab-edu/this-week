import Navigator from 'components/navigator/navigator';

import Title from 'components/title/title';
import { settingTitle } from 'constants/title/habitTitle';
import MainContainer from 'components/container/mainContainer';
import HeaderContainer from 'components/container/headerContainer';

const Setting = () => {
  return (
    <>
      <Navigator />
      <MainContainer>
        <HeaderContainer>
          <Title text={settingTitle} />
        </HeaderContainer>
      </MainContainer>
    </>
  );
};

export default Setting;
