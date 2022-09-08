import WishData from "./WishList";
import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { wishListApi } from "src/api/wishlist/wishlist";
import { isAuthenticated } from "src/helpers/token";

export default function Wishlist() {
  const { data: wishValue, refetch } = useQuery(
    "wish",
    () => wishListApi.wishlists(),
    { enabled: isAuthenticated() }
  );

  const [Wish, setWish] = useState([]);

  useEffect(() => {
    console.log(wishValue);
    setWish(wishValue?.data);
  }, [wishValue]);

  return (
    <>
      <div className="container pt-0 pb-4 lg:pt-0 border-b border-b-bgGround">
        <h3 className="capitalize text-[17px] font-medium">Your WishList</h3>
        <p className="text-sm text-gray-700 font-normal">
          There are {Wish?.length} products in your Wishlist
        </p>
      </div>

      <div className="container ">
        <div className=" py-5 lg:pt-[20px] lg:pb-[30px]">
          <WishData Wish={Wish} />
        </div>
      </div>
    </>
  );
}
