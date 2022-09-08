import styles from "../buy-sell/buysell.module.css";
import Image from "next/image";
import Link from "next/link";

const Buysell = () => {
  return (
    <section className={`mt-[4rem] relative ${styles.buy_sell}`}>
      <div className={`container `}>
        <div
          className={`absolute inset-x-0 left-1/2 -ml-[200px] -top-12 z-10 hidden lg:block `}
        >
          <Image src="/images/car.png" alt="cars" width={408} height={269} />
        </div>
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-2 relative z-10 ${styles.buy_selldet}`}
        >
          <div className="text-white py-16">
            <h3 className="text-white text-lg mb-4">
              Are you looking to buy a{" "}
              <b className="font-semibold">New Vehicle?</b>
            </h3>
            <p className="text-base">
              Start searching our inventory that includes 2000+ Cars, 5000+
              Bikes, 500+ Trucks and so on.
            </p>
            <Link href="#">
              <a
                className={`btn btn-whiteoutline ${styles.buy_selldetbtn} hover:bg-gray-100 text-lg hover:text-[#5065F6]`}
              >
                View all
              </a>
            </Link>
          </div>
          <div className="mt-6 md:mt-0 py-16">
            <h3>
              Are you looking to buy a{" "}
              <b className="font-semibold">Old Vehicle?</b>
            </h3>
            <p className="text-base">
              Start searching our inventory that includes 2000+ Cars, 5000+
              Bikes, 500+ Trucks and so on.
            </p>
            <Link href="#">
              <a
                className={`btn btn-primaryoutline ${styles.buy_selldetbtn} hover:bg-gray-900 hover:text-gray-100`}
              >
                View all
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buysell;
