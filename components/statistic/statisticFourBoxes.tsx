import { Line, Bar } from 'lib/chartjs';
import ProgressCircle from 'components/common/progressCircle';

const StatisticFourBoxes = () => {
  return (
    <article className="grid-rows-7 grid w-full grid-cols-2 gap-2 text-lg lg:h-full">
      <div className="row-span-3 flex flex-col gap-4 rounded-2xl bg-main-beige p-5">
        <p>완료개수</p>
        <div>
          <Line
            width={100}
            height={50}
            data={LINE_DATA}
            options={LINE_OPTIONS}
          />
        </div>
        <p>
          <strong className="text-3xl">52</strong>개
        </p>
      </div>
      <div className="row-span-4 flex flex-col gap-4 rounded-2xl bg-main-red p-5 text-white">
        <p>완료율</p>
        <ProgressCircle percentage={60} />
      </div>
      <div className="row-span-4 flex flex-col gap-4 rounded-2xl bg-main-pink p-5 text-white">
        <p>미완료율</p>
        <ProgressCircle percentage={20} pathColor="red" />
      </div>
      <div className="row-span-3 flex flex-col gap-4 rounded-2xl bg-main-beige p-5">
        <p>지난주 완료개수</p>
        <Bar data={BAR_DATA} height={200} options={BAR_OPTIONS} />
        <p>
          <strong className="text-3xl">48</strong>개
        </p>
      </div>
    </article>
  );
};

export default StatisticFourBoxes;

const BAR_DATA = {
  labels: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
  datasets: [
    {
      data: [10, 11, 8, 4, 4, 7, 9],
      backgroundColor: [
        '#425195',
        '#42519540',
        '#425195',
        '#42519540',
        '#425195',
        '#42519540',
        '#425195',
      ],
    },
  ],
};

const BAR_OPTIONS = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: false,
      ticks: {
        display: false,
      },
    },
    y: {
      display: false,
      ticks: {
        display: false,
      },
    },
    xAxis: {
      display: false,
    },
    yAxis: {
      display: false,
    },
  },
  elements: {
    bar: {
      borderRadius: 10,
    },
  },
};

const LINE_DATA = {
  labels: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
  datasets: [
    {
      data: [0.1, 0.4, 0, 0.2, 1, 0.5, 0.2],
    },
  ],
};
const LINE_OPTIONS = {
  bezierCurve: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0,
      borderWidth: 2,
      borderColor: '#FAB992',
      lineTension: 0.3,
      fill: 'start',
      backgroundColor: '#FAB99240',
    },
    point: {
      radius: 0,
      hitRadius: 0,
    },
  },
  scales: {
    x: {
      display: false,
      ticks: {
        display: false,
      },
    },
    y: {
      display: false,
      ticks: {
        display: false,
      },
    },
    xAxis: {
      display: false,
    },
    yAxis: {
      display: false,
    },
  },
};
