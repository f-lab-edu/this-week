const StatisticFourBoxes = () => {
  return (
    <article className="grid-rows-7 grid h-96 w-full grid-cols-2 gap-2 text-lg lg:h-full">
      <div className="row-span-3 rounded-2xl bg-main-beige p-5">
        <p>완료개수</p>
      </div>
      <div className="row-span-4 rounded-2xl bg-main-red p-5 text-white">
        <p>완료율</p>
      </div>
      <div className="row-span-4 rounded-2xl bg-main-pink p-5 text-white">
        <p>미완료율</p>
      </div>
      <div className="row-span-3 rounded-2xl bg-main-beige p-5">
        <p>지난주 완료개수</p>
      </div>
    </article>
  );
};

export default StatisticFourBoxes;
