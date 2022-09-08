import { useState } from "react";

const Faqcontent = ({ question, answer }) => {
  const [active, setActive] = useState(false);

  const handleToggleClick = () => {
    setActive(!active);
  };
  return (
    <div className="faq-content mt-7">
      <div className="mb-6 ">
        <div
          className="flex justify-between font-medium font-inter cursor-pointer items-center"
          onClick={handleToggleClick}
        >
          <p className="text-mbase font-medium">{question}</p>
          <div className="relative transition-all border border-solid border-default rounded-full w-5 h-5">
            <div className="absolute top-1/2  -translate-y-1/2 left-1/2 -translate-x-1/2 text-center">
              {active ? "-" : "+"}
            </div>
          </div>
        </div>
        <div className={`mt-4 transition-all ${active ? "block" : "hidden"}`}>
          <p className="text-sm font-normal">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Faqcontent;
