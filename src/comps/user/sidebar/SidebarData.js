import {
  AiOutlineShoppingCart,
  AiFillDashboard,
  AiOutlineFileDone,
} from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";

export const SideBarData = [
  {
    title: "Buying",
    subMenu: [
      {
        icon: <AiOutlineShoppingCart />,
        name: "My Order",
        path: "/userDashboard/order/Order",
      },
      {
        icon: <AiOutlineShoppingCart />,
        name: "My Requirements",
        path: "/userDashboard/order/Requirement",
      },
      {
        icon: <AiFillDashboard />,
        name: "My Wishlist",
        path: "/wishlist",
      },
    ],
  },
  {
    title: "Selling",
    subMenu: [
      // {
      //   icon: <AiOutlineShoppingCart />,
      //   name: "My Matches",
      //   path: "/userDashboard/order/history",
      // },
      {
        icon: <AiOutlineShoppingCart />,
        name: "Lisiting",
        path: "/userDashboard/sell/Quick",
      },

      {
        icon: <AiFillDashboard />,
        name: "Create QuickSell Listing",
        path: "./finderVehicle",
      },
    ],
  },
  {
    title: "My Auto",
    path: "/userDashboard/myauto",
  },

  {
    title: "Rating and Review",
    path: "/userDashboard/rating",
    // subMenu: [
    //   {
    //     icon: <AiOutlineShoppingCart />,
    //     name: "Seller Ratings",
    //     path: "./earn",
    //   },
    //   {
    //     icon: <AiOutlineShoppingCart />,
    //     name: "Buyer Ratings",
    //     path: "./referal",
    //   },
    // ],
  },
  {
    title: "Settings",
    subMenu: [
      {
        icon: <FiUsers />,
        name: "My Profile",
        path: "/userDashboard/profile",
      },
      // {
      //   icon: <AiOutlineFileDone />,
      //   name: "Verifications",
      //   path: "/userDashboard/verifications",
      // },
      {
        icon: <RiLockPasswordLine />,
        name: "Change Password",
        path: "/userDashboard/password",
      },
      // {
      //   icon: <IoNotifications />,
      //   name: "Notifications",
      //   path: "/userDashboard/notifications",
      // },
    ],
  },
];
