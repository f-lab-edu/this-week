import Navigator from 'components/navigator/navigator';

import Title from 'components/title/title';
import { SETTING_TITLE } from 'constants/title/habitTitle';
import MainContainer from 'components/container/mainContainer';
import HeaderContainer from 'components/container/headerContainer';
import useWindowSize from 'customs/useWindowSize';

const Setting = () => {
  const { type } = useWindowSize();
  return (
    <>
      <MainContainer>
        <HeaderContainer>
          <Title text={SETTING_TITLE[type]} />
        </HeaderContainer>
      </MainContainer>
    </>
  );
};

export default Setting;
