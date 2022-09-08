import Link from "next/link";
import styles from "../jumbotron/jumbotron.module.css";

const Jumbotron = () => {
  return (
    <section className={`pt-[4rem] `}>
      <div className="container">
        <div className="bg-primary-400 text-white py-14 pl-9 pr-9 lg:pr-24 rounded-lg">
          <div className="lg:flex justify-between items-center">
            <div className="lg:max-w-xl text-center lg:text-left">
              <h3 className="text-xl font-semibold text-gray-100 mb-1">
                Confused about which Vehicle to Buy?
              </h3>
              <p className="text-base ">
                Create your requirement with us and let us help you to find you
                your dream Vehicle for you 😍
              </p>
            </div>
            <div className=" text-center lg:text-right">
              <Link href="#">
                <a className="btn btn-warning text-lg">Create Requirement</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
