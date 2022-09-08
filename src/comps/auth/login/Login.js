import Image from "next/image";
import { Row, Col } from "antd";
import LoginForm from "./Form";
import Social from "../social/Social";
import { isAuthenticated } from "../../../helpers/token";
import { useRouter } from "next/router";

export default function Login({ setLoginModel }) {
  const router = useRouter();
  function handle() {
    router.push("/");
  }

  return (
    <>
      {/* <div className="absolute top-[100px] right-[53px]"> */}
      {isAuthenticated() ? (
        handle()
      ) : (
        <div className="relative">
          <div className="block absolute top-[100px] right-[53px]">
            <Image src="/signup/img-1.svg" height="125" width="115" />
          </div>
          <Row>
            <Col className="hidden md:block" md={12}>
              <Social />
            </Col>
            <Col xs={24} sm={24} md={12}>
              <LoginForm setLoginModel={setLoginModel} />
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}
