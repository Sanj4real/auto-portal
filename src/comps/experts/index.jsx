const Experts = () => {
  const EXPERTBLOCK = [
    {
      title: "Hurus",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat lacus imperdiet sit.",
    },
    {
      title: "Purus",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat lacus imperdiet sit.",
    },
    {
      title: "Curus",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat lacus imperdiet sit.",
    },
    {
      title: "Durus",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat lacus imperdiet sit.",
    },
  ];

  return (
    <section className="mt-[50px] lg:mt-[4rem]">
      <div className="container">
        <div className="maintitle--blue  text-center mb-12 ">
          <h2 className="text-default font-medium text-lg">
            How Auto Expert <span>Works</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {EXPERTBLOCK.map((item, index) => (
            <div key={index} className=" px-6 py-8 pt-16 group text-center">
              <h3 className="font-semibold text-base mb-3 ">{item.title}</h3>
              <p className=" font-normal text-sm">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .group {
            box-shadow: 0px 4px 32px -4px rgba(56, 71, 95, 0.2);
          }
        `}
      </style>
    </section>
  );
};

export default Experts;
