import Image from "next/image";
import { Row, Col } from "antd";
import PhoneForm from "./phoneForm";
import Social from "../social/Social";
import { isAuthenticated } from "../../../helpers/token";
import { useRouter } from "next/router";
import Form from "./Form.js";

export default function Register() {
  const router = useRouter();
  function handle() {
    router.push("/");
  }
  return (
    <div className="relative">
      <div className="hidden md:block absolute top-[100px] right-[53px]">
        <Image src="/signup/img-1.svg" height="125" width="115" />
      </div>

      <Row>
        <Col className="hidden md:block" md={12}>
          <Social />
        </Col>
        <Col xs={24} sm={24} md={12}>
          {/* <RegisterForm /> */}
          {router.pathname === "/register/sendotp" ? <PhoneForm /> : <Form />}
        </Col>
      </Row>
    </div>
  );
}
