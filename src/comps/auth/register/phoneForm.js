import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { customerRegisterOTP } from "src/api/auth";
import { messages } from "src/helpers/message";
import errorHandler from "src/helpers/errorHandler";

export default function phoneForm() {
    const router = useRouter()
    const [form] = Form.useForm(); //for form validation using hooks
    const [loading, setLoading] = useState(false);

    function customerRegisterApi(values) {
        customerRegisterOTP({ phone: +values.phone })
            .then(() => {
                messages.success("OTP sent successfully to mobile")
                setLoading(false)
                router.push('/register/customer')
            })
            .catch((err) => {
                errorHandler(err)
                setLoading(false)

            })
    }

    const onSubmit = (values) => {
        console.log("valuse>>>", +values.phone)
        setLoading(true)
        customerRegisterApi(values)
    }

    return (
        <div className={`h-auto relative overflow-hidden flex flex-col justify-center ${router.pathname === "/login" ? 'py-[190px]' : ''} px-24 pt-4`}>
            <div className="absolute bottom-0 right-[250px]">
                <Image src="/signup/img-2.svg" height="200" width="200" />
            </div>

            <div className="mb-6 text-center">
                <h2 className="text-[36px] leading-[46px] font-bold mb-6 text-gray-900">
                    Sign Up
                </h2>
                <h5 className="text-2xl font-semibold text-gray-700">
                    Get started absolutely free
                </h5>
            </div>
            <div className="">
                <Form
                    layout="vertical"
                    form={form}
                    initialValues={{}}
                    autoComplete="off"
                    onFinish={onSubmit}
                >
                    <div>
                        <Form.Item
                            label="Phone Number"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your phone number ",
                                },
                                // {
                                //   type: "text",
                                //   message: "Please enter valid Username",
                                // },
                            ]}
                        >
                            <Input
                                name="phone"
                                size="large"
                                placeholder="phone number"
                            />
                        </Form.Item>
                    </div>



                    <div className="text-center">
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button mb-4 bg-primary-400 font-normal text-sm capitalize border-0 py-[15px] px-[20px] h-auto w-full"
                                loading={loading}
                            >
                                Send OTP
                            </Button>
                            Or
                            <div className="block mt-4">
                                Already a user?
                                <Link href="/signup">
                                    <a className="text-primary-400 ml-3 capitalize">
                                        Login now!
                                    </a>
                                </Link>
                            </div>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    )
}   
