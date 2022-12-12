type DayOfWeek = {
  [key: number]: string;
};

const DateTitle = () => {
  const now = new Date();

  return (
    <div className="text-xl text-sub-text lg:text-end">
      {`${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일, 
  ${DAY_OF_WEEK[now.getDay()]}`}
    </div>
  );
};

export default DateTitle;

const DAY_OF_WEEK: DayOfWeek = {
  0: '일요일',
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일',
};
