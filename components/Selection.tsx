import { useState } from 'react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Combobox } from '@headlessui/react';
import { UseFormRegister } from 'react-hook-form';
import { Currency } from 'contexts/tezos/types';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface SelectionProps {
  list: Currency[];
  label: string;
  register: UseFormRegister<any>;
  name: string;
  rules: Record<string, unknown>;
}

export default function Selection({ list, label, register, name, rules }: SelectionProps) {
  const [query, setQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(list[0]);

  const filteredList =
    query === ''
      ? list
      : list.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as="div" value={selectedItem} onChange={setSelectedItem}>
      <Combobox.Label className="block text-sm font-medium text-gray-700">{label}</Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          {...register(name, rules)}
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm appearance-none"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(item: Currency) => item.symbol}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none appearance-none">
          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredList.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredList.map((item, index) => (
              <Combobox.Option
                key={`currency-list-item-${index}`}
                value={item}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center">
                      <img
                        src={item.iconUrl}
                        alt=""
                        className="h-6 w-6 flex-shrink-0 rounded-full"
                      />
                      <span
                        className={classNames('ml-3 truncate', selected ? 'font-semibold' : '')}
                      >
                        {item.name}
                      </span>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
