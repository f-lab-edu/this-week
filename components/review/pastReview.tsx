import Folder from 'components/svgs/folder.svg';

const PastReview = () => {
  return (
    <article className="grid-rows-8 grid w-full grid-cols-2 gap-x-4 gap-y-6 font-medium lg:h-full">
      <div>
        <div className="row-span-4 mb-2 flex h-40 flex-col items-center justify-center gap-4 rounded-lg bg-main-beige p-5">
          <Folder width="50px" fill="#0000001A" />
        </div>
        <p>모두보기</p>
      </div>
      <div>
        <div className="row-span-4 mb-2 flex h-40 flex-col items-center justify-center gap-4 rounded-lg bg-main-red p-5 text-white">
          <Folder width="50px" fill="#0000001A" />
        </div>
        <p>어제</p>
      </div>
      <div>
        <div className="row-span-4 mb-2 flex h-40 flex-col items-center justify-center gap-4 rounded-lg bg-main-pink p-5 text-white">
          <Folder width="50px" fill="#0000001A" />
        </div>
        <p>이번주</p>
      </div>
      <div>
        <div className="row-span-4 mb-2 flex h-40 flex-col items-center justify-center gap-4 rounded-lg bg-main-beige p-5">
          <Folder width="50px" fill="#0000001A" />
        </div>
        <p>지난주</p>
      </div>
    </article>
  );
};

export default PastReview;
