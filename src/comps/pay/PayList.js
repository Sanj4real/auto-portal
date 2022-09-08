import React, { useState } from "react";
import { Modal, Button } from "antd";
import Link from "next/link";
import Image from "next/image";

const PAYIMAGE = [
  {
    imageSrc: "/pay/e-sewa.png",
  },
  {
    imageSrc: "/pay/khalti.png",
  },
  {
    imageSrc: "/pay/Master.png",
  },
  {
    imageSrc: "/pay/phonePay.png",
  },
];

export default function PayList() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="flex space-x-2 md:space-x-4 mb-6 md:mb-0">
      {PAYIMAGE.map((item, index) => (
        <div
          className="relative bg-[#F4F7FB] rounded-[8px] py-[6px] lg:py-[10px] px-[9px] lg:px-[18px]"
          key={index}
          item={item}
          onClick={showModal}
        >
          <img
            src={item.imageSrc}
            className="h-[52px]  w-auto md:w-[132px] mx-auto lg:w-auto object-contain xl:object-cover cursor-pointer "
          />
        </div>
      ))}


      <Modal
        title={
          <div className="text-center">
            <Image src='/pay/Master.png' alt="left" width="122" height="52" />
          </div>
        }
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            className="block w-full bg-[#77AF04] text-gray-50 py-[15px] h-auto text-sm font-normal border  transition-all hover:bg-transparent hover:text-[#77AF04] hover:border-[#77AF04] "
            onClick={handleOk}
          >
            Pay Now
          </Button>,
        ]}
      >
        <div>
          <h3 className="text-xl font-medium">
            You will be redirected to your
            <Link href="#!">
              <a className="text-[#77AF04] mx-2">eSewa</a>
            </Link>
            account to complete you payment
          </h3>
        </div>
        <div className="pt-[15px]">
          <ul className="space-y-2 text-sm text-[#374253] list-disc ml-5">
            <li>
              Login to your e-sewa account using your eSewa ID and your Password
            </li>
            <li>
              Ensure your rSewa account is active and has sufficient balance
            </li>
            <li>
              Enter your OTP (one time password) sent to your registered mobile
              number
            </li>
          </ul>
        </div>
        <div className="pt-[15px] text-center">
          <span className="text-[#144FFF] text-sm font-normal">
            ***Login with your e-Sewa mobile and Password (not Mpin)
          </span>
        </div>
      </Modal>
    </div>
  );
}
