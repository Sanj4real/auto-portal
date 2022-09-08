import { Input, Form, Button } from "antd";
import Link from "next/link";

export default function PayCart() {
  return (
    <div className="rounded-[4px] border border-gray-300 p-[30px] sticky top-4">
      <h3 className="uppercase text-gray-900 text-base pb-3 font-semibold ">Cart Totals</h3>
      <div className="border-y border-[#E4E5EE] py-5">
        <div className="flex items-center justify-between mb-[42px]">
          <h3 className="text-base font-medium text-gray-700">Subtotal</h3>
          <b className="text-base font-semibold text-gray-900"></b>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-base font-medium text-gray-700">Shipping</h3>
          <b className="text-base font-semibold text-gray-900">Free</b>
        </div>
      </div>
      <div className="border-b border-[#E4E5EE] py-5">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-medium text-gray-700">
            Delivery Area:{" "}
          </h3>
          <b className="text-base font-semibold text-gray-900">
            New Baneshwor, Ktm
          </b>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-medium text-gray-700">Total: </h3>
          <b className="text-base font-semibold text-gray-900">$35.31</b>
        </div>
      </div>
    </div>
  );
}
