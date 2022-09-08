import { Collapse } from "antd";
import { AiOutlineDown } from "react-icons/ai";

export default function FAQAccordion({ qas }) {
  const { Panel } = Collapse;
  return (
    <div className="max-w-5xl m-auto h-fit py-[56px]">
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
        {qas.map((qa, index) => (
          <Panel
            key={index}
            header={qa.question}
            className="text-xl font-medium text-gray-700 p-0 border-0 mb-6 "
          >
            <p className="break-words text-[#3C3C43] text-base font-normal py-0 px-0">
              {qa.answer}
            </p>
          </Panel>
        ))}
      </Collapse>
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
        {qas.map((qa, index) => (
          <Panel
            key={index}
            header={qa.question}
            className="text-xl font-medium text-gray-700 p-0 border-0 mb-6 "
          >
            <p className="break-words text-[#3C3C43] text-base font-normal py-0 px-0">
              {qa.answer}
            </p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}
