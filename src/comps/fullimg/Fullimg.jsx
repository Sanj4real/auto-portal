import Image from "next/image";

const Fullimg = () => {
  return (
    <section className="pt-[50px] lg:pt-[4rem]">
      <div className="container">
        <div className="relative">
          <Image
            src="/images/mahindra.jpg"
            width="1440"
            height="178"
            alt="ad"
          />
        </div>
      </div>
    </section>
  );
};

export default Fullimg;
