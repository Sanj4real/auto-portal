import Link from "next/link";
import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { AutoComplete, Popover } from "antd";
import { searchApi } from "src/api/search/search";
import { wishListApi } from "src/api/wishlist/wishlist";
import { isAuthenticated, removeToken } from "../../helpers/token";
import { messages } from "../../helpers/message";
import { logoutApi } from "src/api/auth";
import { Badge } from "antd";
import { BsHeart } from "react-icons/bs";
import { cartApi } from "src/api/cart/cart";
import LoginModal from "../modals/loginmodal";
import { Router, useRouter } from "next/router";
import { BiLogIn, BiCartAlt, BiHeart, BiSearchAlt } from "react-icons/bi";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

const Mainmenu = () => {
  const queryClient = useQueryClient();
  const [val, setVal] = useState("");
  const [loginStatus, setLoginStatus] = useState(isAuthenticated());
  const [wishListCount, setWishListCount] = useState(0);
  const [cartsCount, setCartCount] = useState(0);
  const [showLoginModel, setShowLoginModel] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const router = useRouter();

  const { data: searchedData, refetch } = useQuery("search", handleSearchApi, {
    enabled: false,
  });
  const { data: wishListsCount, refetch: countRefetch } = useQuery(
    "wishlistscount",
    () => wishListApi.count(),
    { enabled: loginStatus }
  );

  const { data: cartCount, refetch: cartCountRefetch } = useQuery(
    "cartsCount",
    () => cartApi.count(),
    { enabled: loginStatus }
  );

  function handleSearchApi() {
    searchApi(val)
      .then((response) => {
        setSearchResults(response?.data);
      })
      .catch((err) => {
        console.log("error is>>", err);
      });
  }

  const logoutHandler = () => {
    if (loginStatus === true) {
      logoutApi().then(() => {
        router.push("/");
        messages.success("Logged out successfully");
        removeToken();
        setLoginStatus(false);
      });
    }
  };

  useEffect(() => {
    if (loginStatus) {
      // countRefetch();
      // wishlistRefetch();
      // cartCountRefetch();
      // cartRefetch();
      // setLoginStatus(isAuthenticated())
    }
  }, [loginStatus]);

  useEffect(() => {
    setLoginStatus(isAuthenticated());
    if (!isAuthenticated()) queryClient.setQueryData("wishlists", []);
  }, [isAuthenticated()]);

  useEffect(() => {
    searchApi(val)
      .then((response) => {
        setSearchResults(response?.data);
      })
      .catch((err) => {
        console.log("error is>>", err);
      });
  }, [val]);

  const [active, setActive] = useState(false);
  const [searchData, setSearchedData] = useState([]);
  const [options, setSearchOptions] = useState([]);

  const handleToggleClick = () => {
    setActive(!active);
  };

  const setLoginModelFalse = () => {
    setShowLoginModel(false);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    router.push(`/search?searchkey=${val}`);
  };

  useEffect(() => {
    setWishListCount(wishListsCount?.data?.count);
  }, [wishListsCount]);

  useEffect(() => {
    setCartCount(cartCount?.data?.count);
  }, [cartCount]);

  const [visible, setVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = (newVisible) => {
    setVisible(newVisible);
  };

  const handleSelect = (key, value) => {
    console.log(key, value);
    router.push(`/product-details/${value?.key}`);
  };

  const USERNAVIGATE = [
    {
      name: "My Account",
      path: "/userDashboard",
    },
    // {
    //   name: 'My Profile',
    //   path: '/userDashboard/profile'
    // },
  ];

  return (
    <>
      <div className="bg-[#fff] py-3 lg:py-0 relative border-b border-b-bgGround md:border-0 md:border-b-transparent">
        <div className="container">
          <div className="block md:flex items-center justify-between ">
            <div className="">
              <div className="leading-none py-1">
                <Link href="/">
                  <a className="block md:flex items-center space-x-2">
                    <img
                      src="/logo/logo.svg"
                      alt="Picture of the author"
                      objectFit="contain"
                      className="h-12 w-auto object-contain m-auto"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className="block relative lg:mr-[22px]">
              <div className="absolute top-1/2 -translate-y-1/2 z-10 right-[6px] cursor-pointer w-7 h-7 flex justify-center items-center bg-[#0953a0] text-white rounded-full">
                <BiSearchAlt />
              </div>

              <form
                id="autocomplete"
                action="#"
                className="search-smthng "
                onSubmit={searchHandler}
              >
                <AutoComplete
                  // style={{
                  //   minWidth: "550px",
                  // }}
                  dropdownMatchSelectWidth={252}
                  onSearch={(value) => setVal(value)}
                  onSelect={(key, value) => handleSelect(key, value)}
                  options={
                    searchResults && searchResults.length
                      ? searchResults.map((item) => {
                          return { key: item?.slug, value: item?.name };
                        })
                      : [{ key: "No items found", value: "No items found" }]
                  }
                  placeholder="Search Vehicle"
                  className="w-full md:w-[330px] lg:w-[550px] "
                ></AutoComplete>
              </form>
            </div>

            <div className="hidden md:flex items-center space-x-5">
              <div className=" ">
                <Link href={isAuthenticated() ? "/wishlist" : "/login"}>
                  <a
                    onClick={() => {
                      if (!isAuthenticated()) {
                        messages.warning("You need to login first");
                      }
                      return;
                    }}
                    target="_blank"
                  >
                    <Badge
                      count={isAuthenticated() ? wishListCount : null}
                      showZero
                      style={{ backgroundColor: "#D80005" }}
                      size="small"
                    >
                      <BsHeart style={{ fontSize: "22px" }} />
                    </Badge>
                  </a>
                </Link>
              </div>
              <div className=" ">
                <Link href={isAuthenticated() ? "/cart" : "/login"}>
                  <a
                    onClick={() => {
                      if (!isAuthenticated()) {
                        messages.warning("You need to login first");
                      }
                      return;
                    }}
                    target="_blank"
                  >
                    <Badge
                      count={isAuthenticated() ? cartsCount : null}
                      showZero
                      style={{ backgroundColor: "#D80005" }}
                      size="small"
                    >
                      <AiOutlineShoppingCart style={{ fontSize: "22px" }} />
                    </Badge>
                  </a>
                </Link>
                {showLoginModel && router.route !== "/login" && (
                  <LoginModal setLoginModel={setShowLoginModel}></LoginModal>
                )}
              </div>

              <div className="text-xl  font-sm">
                <Popover
                  content={
                    <div>
                      <ul className="text-mbase font-normal">
                        {USERNAVIGATE.map((item, index) => {
                          return (
                            <li className="capitalize py-1">
                              <Link href={item.path}>
                                <a className={item.name}>{item.name}</a>
                              </Link>
                            </li>
                          );
                        })}
                        <li className="capitalize py-1">
                          <Link href={!loginStatus ? "/login" : "#"}>
                            <a onClick={logoutHandler}>
                              {loginStatus ? "Logout" : "Login/register"}
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  }
                  // title="Title"
                  trigger="click"
                  visible={visible}
                  onVisibleChange={handleVisibleChange}
                >
                  <AiOutlineUser
                    style={{ fontSize: "22px" }}
                    className="hover:cursor-pointer"
                  />
                </Popover>
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            :global(.ant-select-show-search .ant-select-selector) {
              padding: 6px 6px 6px 16px !important;
              border-radius: 4px;
              border: 0;
            }
            :global(.ant-select-selection-search-input) {
              height: 100%;
            }
            :global(.ant-select-selection-search input) {
              height: 100%;
              padding-right: 1.7rem !important;
              font-size: 0.9375rem !important;
            }
            :global(.ant-select-selector) {
              padding: 9px 9px 9px 32px !important;
              border-radius: 44px !important;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Mainmenu;
