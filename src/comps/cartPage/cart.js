import { Breadcrumb, Row, Col } from "antd";
import { IoHomeSharp } from "react-icons/io5";
import CartList from "./CartList";
import CartOverview from "./CartOverview";
import { useQuery, useQueryClient } from "react-query";
import { cartApi } from "src/api/cart/cart";
import { useEffect, useState } from "react";
import { isAuthenticated } from "src/helpers/token";
import BreadCrumb from "src/helpers/breadcrumb";

export default function CartPage() {
  const { data: cartList, refetch: cartRefetch } = useQuery(
    "carts",
    () => cartApi.carts(),
    { enabled: isAuthenticated() }
  );

  const [subTotal, setSubTotal] = useState();

  const [cart, setCart] = useState([]);

  const queryClient = useQueryClient();

  useEffect(() => {
    console.log(cartList);
    setCart(cartList?.data?.cartItems);
  }, [cartList]);

  return (
    <>
      <BreadCrumb component="carts" />

      <div className="container">
        <h3 className="capitalize text-lg  font-medium">Your Cart</h3>
        <p className=" text-sm text-gray-600 font-normal">
          There are {cart?.length} products in your cart
        </p>
      </div>

      <div className="container ">
        <div className=" py-4 lg:pt-5">
          <Row gutter={24}>
            <Col xs={24} sm={24} md={16} lg={16} xl={16}>
              <CartList setSubTotal={setSubTotal} cart={cart} />
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <CartOverview subTotal={subTotal} />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
