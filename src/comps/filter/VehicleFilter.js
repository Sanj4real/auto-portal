import { Steps, Button, message } from "antd";
import VehicleSteps from "./Vehicle";
import BudgetSteps from "./Budget";
import BasicSteps from "./Basic";
import LastSteps from "./Last";
import Review from "./Review";

import React from "react";

const { Step } = Steps;

const steps = [
  {
    title: "What do you want to sell",
    content: <BasicSteps />,
  },
  {
    title: "Let's Sell Your Car",
    content: <VehicleSteps />,
  },
  {
    title: "Share Your Car Details",
    content: <BudgetSteps />,
  },
  {
    title: "Upload Car photos",
    content: <LastSteps />,
  },
  {
    title: " Review Your Listing",
    content: <Review />,
  },

];

export default function VehicleFilter() {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="container px-0 py-8  lg:px-20 lg:py-24 ">
      <div className=" lg:text-center mb-4 lg:mb-16">
        <h2 className="text-2xl font-semibold capitalize ">
          Let's Find Your Perfect Vehicle
        </h2>
      </div>

      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title}  />
        ))}
      </Steps>

      <div className="pt-4  lg:pt-24">{steps[current].content}</div>

      <div className="steps-action mt-4 lg:mt-6">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button className="my-2 lg:mx-2"  onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
      <style jsx>
        {`

          .steps-action {
            margin-top: 24px;
          }
          :global(.ant-btn){
            background: #5065F6;
              padding: 11px 30px;
              text-align: center;
              font-size: 15px;
              font-weight: 500;
              height: auto;
              width: auto;
              line-height: auto;
              text-align: center;
              color: #fff;
              border: 1px solid transparent;
            }
            :global(.ant-btn:hover){
                background: transparent;
                border-color: #5065F6;
                color: #5065F6;
              }
              :global(.ant-btn svg){
                height: 22px;
                width: 22px
              }
            :global(.ant-steps-item-title){
              font-size: 17px;
              font-weight: 500
            }
            :global(.ant-btn span){
                display: block
            }
            :global(.ant-steps-item-container){
                display: flex;
                align-items: center;
            }
            :global(.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon){
                background: #0E9E49 !important;
                border-color: #0E9E49 !important;
            }
            :global(.ant-steps-item-icon){
                display: inline-flex;
                align-items: center;
                justify-content: center;
                height: 24px;
                width: 24px;
            }
            :global(.ant-steps-item-finish .ant-steps-item-icon){
                background: #0E9E49 !important;
                border: transparent !important
            }
            :global(.ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after){
                background: #0E9E49 !important;
            }
            :global(.ant-steps-item-icon .ant-steps-icon){
                font-size: 14px !important
            }
            :global(.ant-steps-item-icon .ant-steps-icon svg){
                display: flex;
            }
            :global(.ant-steps-item-icon .ant-steps-icon svg path){
                fill: #fff
            }
        `}
      </style>
    </div>
  );
}
