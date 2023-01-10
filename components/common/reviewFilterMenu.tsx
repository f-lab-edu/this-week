import { Fragment, ElementType } from 'react';
import { Menu, Transition } from '@headlessui/react';

type Item = { label: string; tag: ElementType; status: boolean };
type Items = {
  items: Item[];
  selectMenu(menu: string): void;
};

const ReviewFilterMenu = ({ items, selectMenu }: Items) => {
  return (
    <div className="flex justify-end">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-soft-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Filter
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {items.map((item) => (
              <Menu.Item key={item.label}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-black text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => selectMenu(item.label)}
                  >
                    <item.tag
                      width="20px"
                      fill="lightgray"
                      className="mr-3 h-5 w-5"
                    />
                    {item.label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ReviewFilterMenu;
