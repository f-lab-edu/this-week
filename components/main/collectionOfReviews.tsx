import { useState } from 'react';

import PastReview from 'components/review/pastReview';
import ReviewFilterMenu from 'components/common/reviewFilterMenu';

import Folder from 'components/svgs/folderOpen.svg';
import Tag from 'components/svgs/tag.svg';

const CollectionOfReviews = () => {
  const [menu, setMenu] = useState([
    { label: '주차별', tag: Folder, status: true },
    { label: '태그별', tag: Tag, status: false },
  ]);
  const selectMenu = (selectedMenu: string) => {
    setMenu(
      menu.map((item) =>
        item.label === selectedMenu
          ? { ...item, status: true }
          : { ...item, status: false },
      ),
    );
  };
  const selectedView = () => {
    const selectedItem = menu.find((item) => item.status)?.label;
    switch (selectedItem) {
      case '주차별':
        return <PastReview />;
      case '태그별':
        return <div>열심히 개발중이예요 🚂💨</div>;
      default:
        return <div>선택된 메뉴가 없습니다.</div>;
    }
  };

  return (
    <section className="p-6">
      <div className="flex items-center justify-between pb-5">
        <p className="text-xl font-semibold">회고를 모아봤어요</p>
        <ReviewFilterMenu items={menu} selectMenu={selectMenu} />
      </div>
      {selectedView()}
    </section>
  );
};

export default CollectionOfReviews;
