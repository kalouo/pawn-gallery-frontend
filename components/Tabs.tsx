import { useState } from 'react';

interface TabsProps {
  tabItems: {
    name: string;
    content: React.ReactNode;
  }[];
}

const Tabs = ({ tabItems }: TabsProps) => {
  const [openTab, setOpenTab] = useState(0);
  const color = 'indigo';

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
            role="tablist"
          >
            {tabItems.map((item, index) => (
              <li className="flex-auto text-center" key={`tab-${index}`}>
                <a
                  className={
                    `uppercase px-6 py-3 block sm:border-2 sm:border-${color}-600 ` +
                    (openTab === index
                      ? 'text-white bg-' + color + '-600'
                      : 'text-' + color + '-600 bg-white ') +
                    (index === 0 ? '' : ' sm:border-l-0')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(index);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="">
            <div className="tab-content tab-space">
              {tabItems.map((item, index) => (
                <div
                  key={`tab-content-${index}`}
                  className={openTab === index ? 'block' : 'hidden'}
                  id={`borrow-content-${index}`}
                >
                  {item.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
