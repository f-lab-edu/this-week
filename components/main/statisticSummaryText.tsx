import { Children, isValidElement, ReactNode } from 'react';

import Target from 'components/svgs/target.svg';

type Props = {
  count?: number;
};

const ThisWeekDone = ({ count = 52 }: Props) => {
  return (
    <div className="flex gap-2">
      <Target width="20px" />
      <p>
        이번주에 <span className="text-lg font-semibold">{count}개</span>의
        습관을 완료했어요.
      </p>
    </div>
  );
};

const LastWeekDone = ({ count = 30 }: Props) => {
  return (
    <div className="flex gap-2">
      <Target width="20px" />
      <p>
        지난주에 <span className="text-lg font-semibold">{count}개</span>의
        습관을 완료했어요.
      </p>
    </div>
  );
};

const ThisWeekAchivementRate = ({ count = 30 }: Props) => {
  return (
    <div className="flex gap-2">
      <Target width="20px" />
      <p>
        이번주 목표를 <span className="text-lg font-semibold">{count}%</span>
        달성했어요.
      </p>
    </div>
  );
};

const LastWeekAchivementRate = ({ count = 30 }: Props) => {
  return (
    <div className="flex gap-2">
      <Target width="20px" />
      <p>
        지난주 목표를 <span className="text-lg font-semibold">{count}%</span>
        달성했어요.
      </p>
    </div>
  );
};

type ChildrenProps = {
  children: ReactNode;
};

const ThisWeekDoneType = (<ThisWeekDone />).type;
const getThisWeekDone = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === ThisWeekDoneType)
    .slice(0, 2);
};

const LastWeekDoneType = (<LastWeekDone />).type;
const getLastWeekDone = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === LastWeekDoneType)
    .slice(0, 2);
};

const ThisWeekAchivementRateType = (<ThisWeekAchivementRate />).type;
const getThisWeekAchivementRate = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      (child) =>
        isValidElement(child) && child.type === ThisWeekAchivementRateType,
    )
    .slice(0, 2);
};

const LastWeekAchivementRateType = (<LastWeekAchivementRate />).type;
const getLastWeekAchivementRate = (children: ReactNode) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter(
      (child) =>
        isValidElement(child) && child.type === LastWeekAchivementRateType,
    )
    .slice(0, 2);
};

const StatisticSummaryContainer = ({ children }: ChildrenProps) => {
  const thisWeekDone = getThisWeekDone(children);
  const lastWeekDone = getLastWeekDone(children);
  const thisWeekAchivementRate = getThisWeekAchivementRate(children);
  const lastWeekAchivementRate = getLastWeekAchivementRate(children);

  return (
    <div className="flex flex-col gap-5">
      {thisWeekDone && thisWeekDone}
      {lastWeekDone && lastWeekDone}
      <div className="flex justify-between">
        {thisWeekAchivementRate && thisWeekAchivementRate}
        {lastWeekAchivementRate && lastWeekAchivementRate}
      </div>
    </div>
  );
};

const StatisticSummaryText = Object.assign(StatisticSummaryContainer, {
  ThisWeekDone,
  LastWeekDone,
  ThisWeekAchivementRate,
  LastWeekAchivementRate,
});

export default StatisticSummaryText;
