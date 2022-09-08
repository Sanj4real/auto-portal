import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { isAuthenticated } from "src/helpers/token";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { Badge, Avatar, messages } from "antd";
import { useQuery, useMutation, useQueryClient } from "react-query";

// api
import { cartApi } from "src/api/cart/cart";
import { wishListApi } from "src/api/wishlist/wishlist";

export default function FootNav() {
  const router = useRouter();
  const [footData, setFootData] = useState(null);

  //cartNumber
  const [cartsCount, setCartsCount] = useState(null);
  const { data: cartCountData } = useQuery(
    "cartsCount",
    () => cartApi.count(),
    {
      enabled: isAuthenticated(),
    }
  );
  useEffect(() => {
    if (!cartCountData) {
      // !false
      setCartsCount(cartCountData?.data);
    }

    // !true
  }, [cartCountData]);

  // wishNumber
  const [wishCount, setWishCount] = useState(null);
  const { data: wishCountData } = useQuery(
    "wishCount",
    () => wishListApi.count(),
    {
      enabled: isAuthenticated(),
    }
  );
  useEffect(() => {
    console.log(wishCountData, "wishcount");
    if (!wishCountData) {
      setWishCount(wishCountData?.data);
      console.log(wishCountData, "wish");
    }
  }, [wishCountData]);

  // footContent
  useEffect(() => {
    if (!footData) {
      setFootData([
        {
          name: "Home",
          path: "/",
          icon: <AiFillHome className="text-xl" />,
        },
        {
          name: "wishlist",
          path: "/wishlist",
          icon: <BsHeart className="text-xl" />,
          badge: [
            {
              num: wishCount?.count,
            },
          ],
        },
        {
          name: "Cart",
          path: "/cart",
          icon: <AiOutlineShoppingCart className="text-xl" />,
          badge: [
            {
              num: cartsCount?.count,
            },
          ],
        },
        {
          name: "Account",
          path: "/login",
          icon: <AiOutlineUser className="text-xl" />,
        },
      ]);
    }
  }, [footData, wishCount, cartsCount]);

  const handleClick = (e) => {
    e.preventDefault();
    router.push(footData?.path);
  };

  return (
    <>
      <div className=" block md:hidden fixed bottom-0 left-0 right-0 w-full bg-bgGround  z-10 mx-auto">
        <ul
          className="flex container items-center justify-between py-4 "
          style={{
            boxShadow: "0px 2px 25px 12px rgb(0 0 0 / 9%)",
          }}
        >
          {(Array.isArray(footData) ? footData : []).map((item, index) => {
            return (
              <li
                key={index}
                className="inline-block  capitalize font-medium"
                item={item}
              >
                {item?.badge ? (
                  <Link href={isAuthenticated() ? `${item?.path}` : "/login"}>
                    <a
                      onClick={() => {
                        if (!isAuthenticated()) {
                          messages.warning("You need to login first");
                        }
                        return;
                      }}
                    >
                      <Badge
                        count={isAuthenticated() ? wishCount?.count : ""}
                        showZero
                        size="small"
                        style={{ backgroundColor: "#D80005" }}
                      >
                        {item?.icon}
                      </Badge>
                    </a>
                  </Link>
                ) : (
                  <>
                    <Link href={item?.path}>
                      <a>{item?.icon}</a>
                    </Link>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
