import { Collapse } from "antd";
import { AiOutlineDown } from "react-icons/ai";

const SPECFAQ = [
  {
    question: "Fuel and Performance",
  },
  {
    question: "Suspension, Streering and Brakes",
  },
  {
    question: "Engine and Transmission",
    title: "Dimension & Capacity:",
    info: "4.70×1.69×1.94 m",
  },
  {
    question: "Exterior and Safefy",
  },
  {
    question: "More Specification",
  },
];

export default function DetailsFaq({ moreSpec }) {
  const { Panel } = Collapse;

  return (
    <div className="p-4 md:p-6 mb-6 block border border-bgGround  ">
      <h4 className="mb-[15px] text-base capitalize text-gray-900 font-medium ">
        More Specification
      </h4>
      <div>
        <Collapse
          accordion
          expandIcon={({ isActive }) => (
            <AiOutlineDown
              className={`inline-block h-43 w-3 transition-all absolute right-4 top-1/2 -translate-y-1/2 duration-300${
                isActive ? " rotate-180" : " rotate-0"
              }`}
            />
          )}
          className="border-0 border-x-0  relative px-0"
        >
          {SPECFAQ.map((qa, index) => (
            <Panel
              key={index}
              header={qa.question}
              className="text-sm font-normal text-gray-700 p-0 border-0 mb-6 "
            >
              <div>
                <ul className="flex flex-wrap justify-between">
                  {moreSpec.map((item, index) => (
                    <li
                      key={index}
                      item={item}
                      className="flex  items-center mb-[14px] w-full md:w-[48%] lg:w-[30%] justify-between"
                    >
                      <div className="text-gray-700 text-sm capitalize w-30 font-normal">
                        {item.title}
                      </div>
                      <div className="text-sm capitalize  font-medium">
                        {item.info}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
}
