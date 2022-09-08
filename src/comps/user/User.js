import { Layout } from "antd"
import SideBar from "./sidebar/SideBar";

const { Sider, Content } = Layout;

export default function UserDashboard({ children }) {
  return (
    <>
      <div className="container">
        <Layout className="my-4 bg-transparent sticky top-1">
          <Layout className="bg-slate-50">
            <Sider className="bg-[#F4F7FB]" breakpoint="lg" width={250}>
              <SideBar />
            </Sider>

            <Layout>
              <div className="p-4 pt-0 lg:p-6 lg:pt-0">
                <Content>
                  <div className="min-h-[50vh] rounded-md bg-white">
                    {children}
                  </div>
                </Content>
              </div>
            </Layout>
          </Layout>
        </Layout>
      </div>
      <style jsx>
        {`
          :global(.ant-layout) {
            background: transparent !important;
          }
          :global(.ant-menu-item a) {
            color: #7b8698;
          }
        `}
      </style>
    </>
  );
}
