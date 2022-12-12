const HabitTable = () => {
  const handleTd = (checked: boolean) => {
    return (
      <div className="flex justify-center">
        <div
          className={`h-2 w-2 rounded-full ${
            checked ? 'bg-black' : 'border border-black'
          }`}
        />
      </div>
    );
  };
  return (
    <div className="w-full">
      <div className="h-56 rounded-lg bg-main-border p-5 text-lg">
        <table className="w-full table-auto text-sm">
          <thead>
            <tr>
              <th></th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th>토</th>
              <th>일</th>
            </tr>
          </thead>
          <tbody>
            {TABLE_TEST.map((table) => {
              const {
                title,
                dayOfWeek: { sun, mon, tue, wed, thu, fri, sat },
              } = table;
              return (
                <tr key={title}>
                  <td>{title}</td>
                  <td>{handleTd(sun)}</td>
                  <td>{handleTd(mon)}</td>
                  <td>{handleTd(tue)}</td>
                  <td>{handleTd(wed)}</td>
                  <td>{handleTd(thu)}</td>
                  <td>{handleTd(fri)}</td>
                  <td>{handleTd(sat)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HabitTable;

const TABLE_TEST = [
  {
    title: '오전루틴',
    dayOfWeek: {
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      sun: true,
    },
  },
  {
    title: '운동',
    dayOfWeek: {
      mon: false,
      tue: false,
      wed: true,
      thu: false,
      fri: false,
      sat: false,
      sun: false,
    },
  },
  {
    title: '오후루틴',
    dayOfWeek: {
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: true,
      sat: false,
      sun: false,
    },
  },
  {
    title: '저녁루틴',
    dayOfWeek: {
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: true,
      sat: false,
      sun: false,
    },
  },
];
