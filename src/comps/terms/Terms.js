const paraStyle = {
  color: "rgba(55, 66, 83, 1)",
  padding: "8px 0",
  fontWeight: "500",
  fontSize: "18px",
  lineHeight: "26px",
  marginBottom: "15px",
};

const LIST = [
  {
    list: "A Terms of Use agreement is a legal document. If you run a website, app, or virtually any other type of service, a Terms of Use agreement can help you",
  },
  {
    list: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ",
  },
  {
    list: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ",
  },
];

export default function Terms() {
  return (
    <div>
      <div className="sm:my-[30px] md:my-[60px] lg:my-[90px]  px-0 md:px-[60px] lg:px-40">
        <div className="container">
          <div className="text-center lg:max-w-2xl m-auto">
            <h5 className="text-xl text-gray-700 font-medium  mb-2">
              Privacy Policy
            </h5>
            <h2 className="text-3xl leading-9 font-semibold">
              About our Privacy/Ethics Policy
            </h2>
          </div>
          <div className=" pb-[56px]">
            <p className="text-lg text-gray-700 leading-6 mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              cupiditate repudiandae dolorum neque blanditiis suscipit optio
              eius quos dolor dignissimos laborum, sunt est accusamus pariatur
              aut maxime temporibus officia facere.
            </p>
          </div>
          <div className="sm:mb-8 md:mb-6 mb-[45px]">
            <h5 className="font-semibold text-xl mb-4">
              Welcome to Auto Portal
            </h5>
            <p className="text-lg text-gray-700 leading-6 my-4">
              A Terms of Use agreement is a legal document. If you run a
              website, app, or virtually any other type of service, a Terms of
              Use agreement can help you:
            </p>
            <ul>
              {LIST.map((item, index) => (
                <li
                  key={index}
                  className="ml-6 list-disc my-1 text-lg text-gray-700 leading-6 last:mb-0"
                >
                  {item.list}
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:mb-8 md:mb-6 mb-[45px]">
            <h5 className="font-semibold text-xl mb-4">
              Welcome to Auto Portal
            </h5>
            <p className="text-lg text-gray-700 leading-6 my-4">
              A Terms of Use agreement is a legal document. If you run a
              website, app, or virtually any other type of service, a Terms of
              Use agreement can help you:
            </p>
            <ul>
              {LIST.map((item, index) => (
                <li
                  key={index}
                  className="ml-6 list-disc my-1 text-lg text-gray-700 leading-6 last:mb-0"
                >
                  {item.list}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
