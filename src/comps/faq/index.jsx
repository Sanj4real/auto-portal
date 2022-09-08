import Faqcontent from "./Faqcontent";

const Faq = () => {
  return (
    <section
      className="py-[4rem]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="container">
        <div className="maintitle--blue  text-center font-medium text-lg mb-5">
          <h2 className="font-semibold text-lg mb-8">
            Frequently Asked <span className="text-[#172337]">Question</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-x-40 gap-y-0">
          <div>
            <Faqcontent
              question="What car can I get for USD1,500 and below?"
              answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error assumenda neque tenetur ducimus reprehenderit corrupti vel veritatis sapiente corporis deserunt? Maxime consequatur similique labore magnam quis nemo et dolore libero!"
            />
            <Faqcontent
              question="What car can I get for USD1,500 and below?"
              answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error assumenda neque tenetur ducimus reprehenderit corrupti vel veritatis sapiente corporis deserunt? Maxime consequatur similique labore magnam quis nemo et dolore libero!"
            />
            <Faqcontent
              question="What car can I get for USD1,500 and below?"
              answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error assumenda neque tenetur ducimus reprehenderit corrupti vel veritatis sapiente corporis deserunt? Maxime consequatur similique labore magnam quis nemo et dolore libero!"
            />
          </div>
          <div>
            <Faqcontent
              question="What car can I get for USD1,500 and below?"
              answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error assumenda neque tenetur ducimus reprehenderit corrupti vel veritatis sapiente corporis deserunt? Maxime consequatur similique labore magnam quis nemo et dolore libero!"
            />
            <Faqcontent
              question="What car can I get for USD1,500 and below?"
              answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error assumenda neque tenetur ducimus reprehenderit corrupti vel veritatis sapiente corporis deserunt? Maxime consequatur similique labore magnam quis nemo et dolore libero!"
            />
            <Faqcontent
              question="What car can I get for USD1,500 and below?"
              answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error assumenda neque tenetur ducimus reprehenderit corrupti vel veritatis sapiente corporis deserunt? Maxime consequatur similique labore magnam quis nemo et dolore libero!"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq-content > .mb-6 > .flex > p {
            font-size: 18px;
          }
        `}
      </style>
    </section>
  );
};

export default Faq;
