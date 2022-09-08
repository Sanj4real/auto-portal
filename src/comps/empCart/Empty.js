import { Breadcrumb } from "antd";
import { IoHomeSharp } from "react-icons/io5";
import Link from "next/link";

export default function EmptyCart() {
  return (
    <>
      <section className="py-6  lg:pt-8 lg:pb-0">
        <div className="container">
          <Breadcrumb separator=">">
            <Breadcrumb.Item href="/">
              <IoHomeSharp className="inline-block" />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/cart">
              <span>Cart List</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="text-gray-600 text-sm font-medium">
              CartEmpty
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </section>
      <div className="container pt-0 pb-[15px] lg:pt-[49px] border-b border-b-[#E6EAF0]">
        <h3 className="capitalize text-xl text-gray-900 font-medium">
          Your Cart
        </h3>
        <p className="text-700 text-sm text-gray-700 font-normal">
          There is nothing in your Cart
        </p>
      </div>

      <div className="container py-[45px] mb-8 lg:mb-20 text-center bg-[#E1F0FF]">
          <h3 className="text-4xl leading-10 text-gray-900 font-bold mb-2 lg:mb-2">Your shopping cart is empty.</h3>
          <p className="text-lg font-medium text-gray-800">Discover the <Link href="/list"><a className="hover:underline">most popular car</a></Link> available or browse our <a href="/link" className="hover:underline">hottest new cars.</a></p>
      </div>
    </>
  );
}
