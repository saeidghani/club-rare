import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import roundArrow from '../../assets/icons/roundArrow.svg';

export default function Select({
  type = 'primary',
  options,
  width = 'w-56',
  label,
  labelClassName,
  logoClassName,
  selectedClass,
  placeholder,
  ...props
}) {
  const [selected, setSelected] = useState(placeholder || options[0]);

  return (
    <div className={width}>
      <Listbox placeholder="" value={selected.value} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="relative z-10">
              <Listbox.Button
                className={`relative w-full text-left cursor-default focus:outline-none
              focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white
               focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2
               focus-visible:border-indigo-500 sm:text-sm bg-transparent ${
                 type === 'primary' ? 'border-b-2 border-solid border-white' : ''
               }`}
                {...props}
              >
                <div className="flex items-center space-x-4 py-0.5">
                  {selected?.logo && (
                    <div className={logoClassName ? logoClassName : ''}>{selected?.logo}</div>
                  )}
                  <div>
                    {label && <div className={labelClassName}>{label}</div>}
                    <span
                      className={`block truncate ${type === 'primary' ? 'text-fadeBlue2' : ''} ${
                        selectedClass || 'text-12 md:text-16'
                      }`}
                    >
                      {selected?.name}
                    </span>
                  </div>
                </div>
                <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                  <img
                    className={`${type === 'primary' ? 'text-fadeBlue2' : ''}`}
                    src={roundArrow}
                    alt="Arrow"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  static
                  className="absolute w-full mt-1 overflow-auto text-18 text-white
                   rounded-md shadow-lg max-h-28 focus:outline-none sm:text-sm"
                >
                  {options.map((option, optionIdx) => (
                    <Listbox.Option
                      key={optionIdx}
                      className={({ active }) =>
                        `${active ? '' : ''}
                          select-none relative py-1 pl-4 pr-4 cursor-pointer bg-white bg-lightestGray`
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <div className="flex items-center space-x-2">
                          {option?.logo && (
                            <div className={logoClassName ? logoClassName : ''}>{option?.logo}</div>
                          )}
                          <span
                            className={`${
                              selected ? 'font-medium' : 'font-normal'
                            } block truncate ${type === 'primary' ? 'text-16 text-fadeBlue2' : ''}`}
                          >
                            {option.name}
                          </span>
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}
