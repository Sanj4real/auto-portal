import { Input, Form, Button } from "antd";
import Link from "next/link";

export default function CartOverview({ subTotal }) {
  return (
    <div className="rounded-[4px] bg-bgGround py-4 px-4 sticky top-4">
      <h3 className="uppercase text-mbase pb-2 mb-2 font-medium ">
        Cart Totals
      </h3>
      <div className="border-y border-white py-4">
        <div className="flex items-center justify-between my-2">
          <h3 className="text-sm font-medium text-gray-600">Subtotal</h3>
          <b className="text-sm font-normal "></b>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-600">Shipping</h3>
          <b className="text-sm font-normal ">Free</b>
        </div>
      </div>
      <div className="border-b border-white py-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-600">Delivery Area: </h3>
          <b className="text-sm font-normal ">New Baneshwor, Ktm</b>
        </div>
      </div>
      <div className="border-b border-white py-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-600">Total: </h3>
          <b className="text-sm font-normal ">${subTotal}</b>
        </div>
      </div>
      <h3 className="capitalize text-mbase pt-2 mt-2 font-medium">
        Apply Coupon
      </h3>
      <p className="text-xs font-normal mb-2">Using A Promo code?</p>
      <div className="py-3">
        <Form layout="inline">
          <Form>
            <Input
              placeholder="Enter your Coupon"
              className="min-h-full p-auto bg-white"
            />
          </Form>
          <Form>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="text-sm  text-white bg-hoverColor border-0 min-h-full py-3 px-8 ml-4 rounded-[4px]  hover:bg-hoverbgColor"
            >
              Apply
            </Button>
          </Form>
        </Form>
      </div>
      <div>
        <Link href="/pay">
          <a className="text-sm  text-white bg-hoverColor block w-full py-3 text-center border transition-all  rounded-[4px] hover:text-white  hover:bg-hoverbgColor">
            Proceed To CheckOut
          </a>
        </Link>
      </div>
    </div>
  );
}
