import FAQAccordion from "./FAQAccordion";

const QAS = [
  {
    question: "What is Auto Expert?",
    answer:
      "Auto Expert is to bring programmability and interoperability to EVM compatible Chain. In order to embrace the existing Tools and Technology DeXit Chain offer several features that existing Chain don't offer, DeXit Chain will bring huge benefits by staying compatible with all the existing smart contracts on Ethereum, Binance smartchain and several EVM chain, Developer can use all Ethereum tooling on DeXit chain.",
  },
  {
    question: "Purpose of Auto Expert?",
    answer:
      "Auto Expert is to bring programmability and interoperability to EVM compatible Chain. In order to embrace the existing Tools and Technology DeXit Chain offer several features that existing Chain don't offer, DeXit Chain will bring huge benefits by staying compatible with all the existing smart contracts on Ethereum, Binance smartchain and several EVM chain, Developer can use all Ethereum tooling on DeXit chain.",
  },
  {
    question: "Why Auto Expert?",
    answer:
      "Auto Expert is to bring programmability and interoperability to EVM compatible Chain. In order to embrace the existing Tools and Technology DeXit Chain offer several features that existing Chain don't offer, DeXit Chain will bring huge benefits by staying compatible with all the existing smart contracts on Ethereum, Binance smartchain and several EVM chain, Developer can use all Ethereum tooling on DeXit chain.",
  },
  {
    question: "What Brings to Auto Expert?",
    answer:
      "Auto Expert is to bring programmability and interoperability to EVM compatible Chain. In order to embrace the existing Tools and Technology DeXit Chain offer several features that existing Chain don't offer, DeXit Chain will bring huge benefits by staying compatible with all the existing smart contracts on Ethereum, Binance smartchain and several EVM chain, Developer can use all Ethereum tooling on DeXit chain.",
  },
];

export default function FAQ() {
  return (
    <section className="mt-[90px]">
      <div className="container">
        <div className="text-center lg:max-w-2xl m-auto">
          <h5 className="text-xl text-gray-700 font-medium  mb-2">FAQ's</h5>
          <h2 className="text-4xl leading-9 font-semibold">
            Frequently Asked Questions
          </h2>
        </div>
        <FAQAccordion qas={QAS} />
      </div>
    </section>
  );
}
