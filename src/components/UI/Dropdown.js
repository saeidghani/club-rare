import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Dropdown({
  width = 'w-56',
  title,
  items,
  menuButtonWrapperClass,
  menuButtonClass,
  menuItemsClass,
  menuItemClass,
  displayChevronDown = true,
}) {
  const history = useHistory();

  return (
    <div className={`relative text-center ${width}`}>
      <Menu as="div" className=" inline-block text-left w-full">
        {({ open }) => (
          <>
            <div className={`absolute right-0 left-0 z-50 ${menuButtonWrapperClass || 'top-0'}`}>
              <Menu.Button
                className={`inline-flex items-center w-full
                focus:outline-none ${menuButtonClass || 'justify-center px-4 py-2'}`}
              >
                <div>{title}</div>
                {displayChevronDown && (
                  <ChevronDownIcon className="w-6 h-6 ml-2 -mr-1" aria-hidden="true" />
                )}
              </Menu.Button>
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className={`absolute focus:outline-none ${
                  menuItemsClass || '-right-8 w-56 mt-10 rounded-md'
                }`}
              >
                {items.map((i) => (
                  <div key={i.key} className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'text-black' : 'text-gray'
                          } group flex items-center w-full focus:outline-none ${
                            menuItemClass ||
                            'rounded-md px-2 py-2 text-18 text-center justify-center'
                          }`}
                          onClick={() => {
                            i?.href ? history.push(i.href) : i?.onClick ? i?.onClick() : {};
                          }}
                        >
                          {i.title}
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                ))}
              </Menu.Items>
            </Transition>
            {/* <div className="h-60 relative" style={{ zIndex: -5, opacity: 0.1 }}>
              <div className="radialGradient" />
            </div>*/}
          </>
        )}
      </Menu>
    </div>
  );
}
