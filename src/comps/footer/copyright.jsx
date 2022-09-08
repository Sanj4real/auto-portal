import Image from "next/image";

const Copyright = () => {
  return (
    <div className="border-t border-[rgba(255,255,255,.1)] py-4">
      <div className="container">
        <div className="flex justify-between items-center text-mbase">
          <div className="flex items-center">
            <Image
              src="/images/sell.png"
              alt="Picture of the author"
              width={15}
              height={15}
            />
            <p className="ml-2.5 text-sm">Sell on Airportal</p>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/ads.png"
              alt="Picture of the author"
              width={15}
              height={15}
            />
            <p className="ml-2.5 text-sm">Advertise</p>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/question.png"
              alt="Picture of the author"
              width={15}
              height={15}
            />
            <p className="ml-2.5 text-sm">Help Center</p>
          </div>
          <div>
            <p className="text-sm">&copy;&nbsp;2022 Airportal.com</p>
          </div>
          <div>
            <span className="font-medium text-sm mr-1">161274154</span> items
            sold
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
