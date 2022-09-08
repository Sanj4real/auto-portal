import Link from "next/link";

const Suggestion = () => {
  return (
    <section className="mt-[50px] lg:mt-[4rem]">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-5">
          <Link href="#">
            <a className=" hover:bg-gray-100 group overflow-hidden rounded-md">
              <div
                style={{
                  backgroundImage: `url(/images/suggestion.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
                className="bg-center bg-cover bg-no-repeat h-[250px] w-full transition-all group-hover:scale-105"
              >
                <div className="flex items-end h-full">
                  <div className=" py-4 px-6 text-sm group-hover:text-sm ml-3 mb-3 rounded-lg font-semibold transition-all  bg-[#5168f6] text-white  group-hover:text-[#5168f6] group-hover:bg-[#fff] group-hover:ml-6">
                    Try AutoExpert Suggestion
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <Link href="#">
            <a className=" hover:bg-gray-100 group overflow-hidden rounded-md">
              <div
                style={{
                  backgroundImage: `url(/images/suggestion.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
                className="bg-center bg-cover bg-no-repeat h-[250px] w-full transition-all group-hover:scale-105"
              >
                <div className="flex items-end h-full">
                  <div className=" py-4 px-6 text-sm group-hover:text-sm ml-3 mb-3 rounded-lg font-semibold transition-all  bg-[#5168f6] text-white  group-hover:text-[#5168f6] group-hover:bg-[#fff] group-hover:ml-6">
                    Learn More
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Suggestion;
