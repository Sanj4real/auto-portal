import { Breadcrumb } from "antd";
import Link from "next/link";

export default function BreadCrumb({ component }) {
  return (
    <div className=" container ">
      <Breadcrumb className="mt-5 mb-3  border-b  border-b-bgGround pb-3 pl-0">
        <Breadcrumb.Item>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="font-medium text-hoverColor">
          {component}
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
