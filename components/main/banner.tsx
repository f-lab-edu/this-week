import Title from 'components/title/title';
import MOTIVATION_TITLE from 'constants/title/habitTitle';

import CurrentData from 'components/title/dateTitle';

import AsyncBoundary from 'components/error/asyncBoundary';
import ErrorAlert from 'components/error/errorAlert';

import useWindowSize from 'customs/useWindowSize';

const Banner = () => {
  const { type } = useWindowSize();

  return (
    <div className="p-6">
      <div className="pb-6">
        <CurrentData />
      </div>
      <AsyncBoundary
        pendingFallback={<div>Loading...</div>}
        rejectedFallback={({ error, reset }) => (
          <ErrorAlert error={error} reset={reset} />
        )}
      >
        <div>
          <div className="pb-2">
            <Title text={MOTIVATION_TITLE[type]} />
          </div>
        </div>
      </AsyncBoundary>
    </div>
  );
};

export default Banner;
