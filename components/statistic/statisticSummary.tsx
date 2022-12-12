import Title from 'components/title/title';
import { STATISTIC_SUMMARY_TITLE } from 'constants/title/habitTitle';
import StatisticSummaryText from 'components/main/statisticSummaryText';

import useWindowSize from 'customs/useWindowSize';

const StatisticSummary = () => {
  const { type } = useWindowSize();
  return (
    <>
      <div className="w-full px-5 py-6">
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold">습관 데이터 요약</p>
          <Title text={STATISTIC_SUMMARY_TITLE[type]} size="lg" bold="medium" />
        </div>
        <div className="flex flex-col py-5">
          <StatisticSummaryText>
            <StatisticSummaryText.ThisWeekDone />
            <StatisticSummaryText.LastWeekDone />
            <StatisticSummaryText.ThisWeekAchivementRate />
            <StatisticSummaryText.LastWeekAchivementRate />
          </StatisticSummaryText>
        </div>
        <div className="flex justify-center py-5">
          <div className="flex h-48 w-48 items-center justify-center rounded-full border border-black">
            <p className="text-2xl">78%</p>
          </div>
        </div>
        <div>
          <p className="text-lg">이번주</p>
          <div className="h-24 border">Chart Section</div>
        </div>
      </div>
    </>
  );
};

export default StatisticSummary;
