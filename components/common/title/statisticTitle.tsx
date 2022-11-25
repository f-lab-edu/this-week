const StatisticTitle = () => {
  return (
    <div className="text-2xl font-semibold">
      <pre className="whitespace-pre-line">{DATA_TEXT[0]}</pre>
    </div>
  );
};

const DATA_TEXT = {
  0: '지난주보다 \n 루틴을 잘 지켰어요 👏',
};

export default StatisticTitle;
