// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { Menu, Dropdown, Button, message } from "antd";
// import {
//   BsListCheck,
//   BsFillGridFill,
//   BsFillHeartFill,
//   BsThreeDotsVertical,
//   BsHeart,
//   BsCartX,
//   BsFillCartCheckFill,
// } from "react-icons/bs";
// import { MdSyncAlt } from "react-icons/md";
// import { DownOutlined } from "@ant-design/icons";
// import { wishListApi } from "src/api/wishlist/wishlist";
// import {
//   QueryClient,
//   useMutation,
//   useQuery,
//   useQueryClient,
// } from "react-query";
// import { messages } from "src/helpers/message";
// import errorHandler from "src/helpers/errorHandler";
// import { isAuthenticated } from "src/helpers/token";
// import LoginModal from "../modals/loginmodal";
// import { Pagination } from "antd";
// import Loader from "src/helpers/loader";
// import { vehiclesApi } from "src/api/vehicle/vehicle";
// import { searchApi, searchApiAll } from "src/api/search/search";
// import { useRouter } from "next/router";
// import { cartApi } from "src/api/cart/cart";

// const menu = (
//   <Menu
//     items={[
//       {
//         label: (
//           <a
//             target="_blank"
//             rel="noopener noreferrer"
//             href="https://www.antgroup.com"
//           >
//             1st menu item
//           </a>
//         ),
//       },
//       {
//         label: (
//           <a
//             target="_blank"
//             rel="noopener noreferrer"
//             href="https://www.aliyun.com"
//           >
//             2nd menu item
//           </a>
//         ),
//       },
//       {
//         label: (
//           <a
//             target="_blank"
//             rel="noopener noreferrer"
//             href="https://www.luohanacademy.com"
//           >
//             3rd menu item
//           </a>
//         ),
//       },
//     ]}
//   />
// );

// export default function ListItems({
//   getvehicles,
//   carList,
//   setAllVehicles,
//   searchKey,
//   CategoryId,
// }) {
//   const router = useRouter();
//   const [layout, setLayout] = useState("grid");
//   const queryClient = useQueryClient();
//   const handleLayoutChange = (layout) => setLayout(layout);
//   console.log("carlist is>>", carList);
//   const [loading, setLoading] = useState(true);
//   const [current, setCurrent] = useState(1);
//   const [pageSize, setPageSize] = useState(9);
//   const [showLoginModel, setLoginModel] = useState(false);
//   const [wishlists, setwishlists] = useState([]);
//   const [total, setTotal] = useState();
//   const [allCars, setAllCars] = useState([]);
//   const [carts, setCartsData] = useState([]);
//   const { data: wishlistsData, refetch: refetchWishlists } = useQuery(
//     "wishlists",
//     () => wishListApi.wishlists(),
//     { enabled: isAuthenticated() }
//   );
//   const { data: cartsData, refetch: refetchCartLists } = useQuery(
//     "carts",
//     () => cartApi.carts(),
//     { enabled: isAuthenticated() }
//   );

//   useEffect(() => {
//     if (isAuthenticated()) refetchWishlists();
//     if (isAuthenticated()) refetchCartLists();
//     router.route === "/list" &&
//       vehiclesApi.count().then((response) => {
//         setTotal(response.data.count);
//       });
//   }, []);

//   useEffect(() => {
//     router.route === "/list" &&
//       getvehicles(current, pageSize)
//         .then(async (response) => {
//           await setAllVehicles(response.data.products);
//           setLoading(false);
//         })
//         .catch((err) => {
//           errorHandler(err);
//         });
//     router.route === "/search" &&
//       searchKey &&
//       searchApi(searchKey, pageSize, current).then(async (response) => {
//         await setAllVehicles(response.data);
//         setLoading(false);
//         searchApiAll(searchKey).then(async (response) => {
//           setTotal(response.data.length);
//         });
//       });
//   }, [searchKey, pageSize, current]);

//   useEffect(() => {
//     setAllCars(carList);
//   }, [carList]);

//   useEffect(() => {
//     setwishlists(wishlistsData?.data);
//   }, [wishlistsData]);

//   useEffect(() => {
//     console.log("cartsData is >>>", cartsData);
//     setCartsData(cartsData?.data);
//   }, [cartsData]);

//   useEffect(() => {
//     if (!isAuthenticated()) {
//       setwishlists([]);
//       setCartsData([]);
//     }
//   }, [isAuthenticated()]);

//   const mutation = useMutation(async ({ id, type }) => {
//     // console.log("type is>>>", type)
//     // console.log("id is>>", id)
//     if (type === "add") {
//       return await wishListApi
//         .add({
//           productId: id,
//         })
//         .then(() => {
//           messages.success("Vehicle successfully added to wishlist");
//           // console.log(queryClient.getQueryData('user'))
//           queryClient.invalidateQueries("wishlists");
//           queryClient.invalidateQueries("wishlistscount");
//         });
//     }
//     if (type === "remove") {
//       id = wishlists?.filter((item) =>
//         item?.productId === id ? item?.id : false
//       )[0].id;
//       return await wishListApi
//         .remove({
//           id,
//         })
//         .then(() => {
//           messages.success("Vehicle Successfully removed from wishlist");
//           queryClient.invalidateQueries("wishlists");
//           queryClient.invalidateQueries("wishlistscount");
//         });
//     }
//   });

//   const cartsMutation = useMutation(async ({ id, type }) => {
//     console.log("type is>>>", id);

//     if (type === "add") {
//       return await cartApi
//         .add({
//           productId: id,
//         })
//         .then(() => {
//           message.success("Item succesfully added to carts");
//           queryClient.invalidateQueries("carts");
//           queryClient.invalidateQueries("cartsCount");
//         });
//     }

//     if (type === "remove") {
//       id = carts?.filter((item) =>
//         item?.productId === id ? item?.cartId : false
//       )[0].cartId;

//       return await cartApi.remove({ id }).then(() => {
//         message.success("Item succesfully removed from carts");
//         queryClient.invalidateQueries("carts");
//         queryClient.invalidateQueries("cartsCount");
//       });
//     }
//   });

//   function changeHandler(page, pageSize) {
//     setCurrent(page);
//     setPageSize(pageSize);
//   }

//   return (
//     <div>
//       {showLoginModel && (
//         <LoginModal setLoginModel={setLoginModel}></LoginModal>
//       )}

//       <div className="flex justify-between items-center mb-5">
//         <h4 className="text-lg font-semibold text-gray-700">Toyota New Cars</h4>
//         <div className="flex items-center">
//           <div className="flex items-center mr-5 text-sm text-gray-500">
//             Sorted By:
//             <Dropdown
//               overlay={menu}
//               className="ml-[10px] flex items-center text-sm text-[#596579] font-medium"
//             >
//               <Button className="h-[44px]">
//                 Most Recent
//                 <DownOutlined />
//               </Button>
//             </Dropdown>
//           </div>
//           <ul className="flex vehicle-list">
//             <li
//               className={`p-3${layout === "grid" ? " active" : ""}`}
//               onClick={() => handleLayoutChange("grid")}
//             >
//               <BsFillGridFill />
//             </li>
//             <li
//               className={`p-3${layout === "list" ? " active" : ""}`}
//               onClick={() => handleLayoutChange("list")}
//             >
//               <BsListCheck />
//             </li>
//           </ul>
//         </div>
//       </div>
//       {layout === "grid" && (
//         <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
//           {!loading ? (
//             CategoryId && CategoryId.length ? (
//               CategoryId.map((item, index) => {
//                 return (
//                   <div
//                     key={index}
//                     className="border border-[#E6EAF0] rounded-lg"
//                   >
//                     <div className="relative w-full h-[251px]">
//                       <Link href={`/details/${item.id}`}>
//                         <Image
//                           alt="Mountains"
//                           src={item.src}
//                           layout="fill"
//                           objectFit="cover"
//                           className="rounded-tl-lg rounded-tr-lg"
//                         />
//                       </Link>
//                       <div className="w-full">
//                         <div className="absolute left-[10px] bottom-[10px]">
//                           <div className="flex items-center">
//                             <div className=" flex items-center text-[#E6EAF0] text-sm py-[11px] px-[15px] bg-gray-700 opacity-80 mr-[10px]">
//                               {(
//                                 (wishlists &&
//                                   wishlists?.length &&
//                                   (wishlists || [])?.map(
//                                     (witem) => witem?.productId
//                                   )) ||
//                                 []
//                               ).indexOf(item?.id) === -1 ? (
//                                 <BsHeart
//                                   onClick={() =>
//                                     isAuthenticated()
//                                       ? mutation.mutate({
//                                           id: item?.id,
//                                           type: "add",
//                                         })
//                                       : setLoginModel(true)
//                                   }
//                                   className="mr-3 text-lg"
//                                 ></BsHeart>
//                               ) : (
//                                 <BsFillHeartFill
//                                   onClick={() =>
//                                     mutation.mutate({
//                                       id: item?.id,
//                                       type: "remove",
//                                     })
//                                   }
//                                   className="mr-3 text-lg"
//                                 />
//                               )}
//                               Wishlist
//                             </div>
//                             <div className="text-[#E6EAF0]  text-2xl p-2 bg-gray-700 opacity-80 mr-[10px]">
//                               <MdSyncAlt />
//                             </div>
//                             <div className="text-[#E6EAF0]  text-2xl p-2 bg-gray-700 opacity-80">
//                               {(
//                                 (carts &&
//                                   carts?.length &&
//                                   (carts || [])?.map(
//                                     (witem) => witem?.productId
//                                   )) ||
//                                 []
//                               ).indexOf(item?.id) === -1 ? (
//                                 <div>
//                                   <BsCartX
//                                     onClick={() =>
//                                       isAuthenticated()
//                                         ? cartsMutation.mutate({
//                                             id: item?.id,
//                                             type: "add",
//                                           })
//                                         : setLoginModel(true)
//                                     }
//                                     className="mr-3 text-lg"
//                                   ></BsCartX>
//                                   <p></p>
//                                 </div>
//                               ) : (
//                                 <BsFillCartCheckFill
//                                   onClick={() =>
//                                     cartsMutation.mutate({
//                                       id: item?.id,
//                                       type: "remove",
//                                     })
//                                   }
//                                   className="mr-3 text-lg"
//                                 />
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                         <div className="absolute right-[10px] bottom-[10px]">
//                           <div className="text-[#E6EAF0] text-2xl p-[8px] m-0 bg-gray-700 opacity-80 ">
//                             <BsThreeDotsVertical />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-[14px]">
//                       <p className="mb-5 flex items-center font-inter">
//                         <b className="text-green-100 text-base font-semibold  mr-[10px]">
//                           {item.price}
//                         </b>
//                         <del className="text-warning text-sm font-medium">
//                           {item.past}
//                         </del>
//                       </p>
//                       <h3
//                         className="text-base mb-
//                 [15px] font-medium capitalize"
//                       >
//                         {item.title}
//                       </h3>
//                       <div
//                         className="flex justify-between flex-wrap mt-4
//                 "
//                       >
//                         <div className="text-center">
//                           <svg
//                             width="24"
//                             height="24"
//                             viewBox="0 0 28 28"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="mx-auto"
//                           >
//                             <g opacity="0.4">
//                               <path
//                                 d="M23.3333 4.66797H21V23.3346H23.3333V4.66797Z"
//                                 fill="#596579"
//                               />
//                               <path
//                                 d="M6.99996 4.66797H4.66663V23.3346H6.99996V4.66797Z"
//                                 fill="#596579"
//                               />
//                               <path
//                                 d="M15.1666 4.66797H12.8333V9.33464H15.1666V4.66797Z"
//                                 fill="#596579"
//                               />
//                               <path
//                                 d="M15.1666 11.668H12.8333V16.3346H15.1666V11.668Z"
//                                 fill="#596579"
//                               />
//                               <path
//                                 d="M15.1666 18.668H12.8333V23.3346H15.1666V18.668Z"
//                                 fill="#596579"
//                               />
//                             </g>
//                           </svg>
//                           <p className="mt-[18px] text-xs">{item.Distance}</p>
//                         </div>
//                         <div className="text-center">
//                           <svg
//                             width="24"
//                             height="24"
//                             viewBox="0 0 29 28"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="mx-auto"
//                           >
//                             <path
//                               opacity="0.4"
//                               d="M24.5579 9.85963C23.3329 4.46964 18.6312 2.04297 14.5012 2.04297H14.4895C10.3712 2.04297 5.65788 4.45797 4.43288 9.84797C3.06788 15.868 6.75454 20.9663 10.0912 24.1746C11.2739 25.3194 12.8553 25.9594 14.5012 25.9596C16.0879 25.9596 17.6745 25.3646 18.8995 24.1746C22.2362 20.9663 25.9229 15.8796 24.5579 9.85963Z"
//                               fill="#596579"
//                             />
//                             <path
//                               d="M14.5024 15.7055C14.985 15.7055 15.4629 15.6104 15.9088 15.4257C16.3546 15.241 16.7598 14.9703 17.101 14.6291C17.4423 14.2878 17.713 13.8827 17.8977 13.4368C18.0823 12.991 18.1774 12.5131 18.1774 12.0305C18.1774 11.5479 18.0823 11.07 17.8977 10.6241C17.713 10.1782 17.4423 9.77311 17.101 9.43185C16.7598 9.0906 16.3546 8.8199 15.9088 8.63521C15.4629 8.45053 14.985 8.35547 14.5024 8.35547C13.5277 8.35547 12.593 8.74266 11.9038 9.43185C11.2146 10.121 10.8274 11.0558 10.8274 12.0305C10.8274 13.0051 11.2146 13.9399 11.9038 14.6291C12.593 15.3183 13.5277 15.7055 14.5024 15.7055Z"
//                               fill="white"
//                             />
//                           </svg>
//                           <p className="mt-[18px] text-xs">{item.Location}</p>
//                         </div>
//                         <div className="text-center">
//                           <svg
//                             width="24"
//                             height="24"
//                             viewBox="0 0 28 28"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="mx-auto"
//                           >
//                             <path
//                               d="M21.0001 15.1641C19.9034 15.1641 18.8884 15.5491 18.0834 16.1907C17.5358 16.6259 17.0938 17.1795 16.7907 17.8099C16.4877 18.4404 16.3313 19.1312 16.3334 19.8307C16.3334 20.7057 16.5784 21.5341 17.0101 22.2341C17.4213 22.9253 18.0056 23.4975 18.7052 23.8944C19.4048 24.2912 20.1957 24.4991 21.0001 24.4974C22.1784 24.4974 23.2517 24.0657 24.0684 23.3307C24.4301 23.0274 24.7451 22.6541 24.9901 22.2341C25.4217 21.5341 25.6667 20.7057 25.6667 19.8307C25.6667 17.2524 23.5784 15.1641 21.0001 15.1641ZM23.4151 19.3291L20.9301 21.6274C20.7667 21.7791 20.5451 21.8607 20.3351 21.8607C20.1134 21.8607 19.8917 21.7791 19.7167 21.6041L18.5617 20.4491C18.399 20.2844 18.3077 20.0622 18.3077 19.8307C18.3077 19.5992 18.399 19.3771 18.5617 19.2124C18.9001 18.8741 19.4601 18.8741 19.7984 19.2124L20.3584 19.7724L22.2251 18.0457C22.5751 17.7191 23.1351 17.7424 23.4617 18.0924C23.7884 18.4424 23.7651 18.9907 23.4151 19.3291Z"
//                               fill="#7B8698"
//                             />
//                             <path
//                               opacity="0.4"
//                               d="M24.605 25.082C24.605 25.4087 24.3484 25.6654 24.0217 25.6654H3.97835C3.65169 25.6654 3.39502 25.4087 3.39502 25.082C3.39502 20.252 8.15502 16.332 14 16.332C15.2017 16.332 16.3684 16.4954 17.4417 16.8104C16.7534 17.627 16.3334 18.6887 16.3334 19.832C16.3334 20.707 16.5784 21.5354 17.01 22.2354C17.2434 22.632 17.5467 22.9937 17.8967 23.297C18.7134 24.0437 19.7984 24.4987 21 24.4987C22.3067 24.4987 23.485 23.962 24.325 23.0987C24.5117 23.7287 24.605 24.3937 24.605 25.082Z"
//                               fill="#596579"
//                             />
//                             <path
//                               opacity="0.4"
//                               d="M14 13.9987C15.5471 13.9987 17.0308 13.3841 18.1247 12.2902C19.2187 11.1962 19.8333 9.71246 19.8333 8.16536C19.8333 6.61827 19.2187 5.13454 18.1247 4.04058C17.0308 2.94661 15.5471 2.33203 14 2.33203C12.4529 2.33203 10.9691 2.94661 9.87517 4.04058C8.78121 5.13454 8.16663 6.61827 8.16663 8.16536C8.16663 9.71246 8.78121 11.1962 9.87517 12.2902C10.9691 13.3841 12.4529 13.9987 14 13.9987Z"
//                               fill="#596579"
//                             />
//                           </svg>
//                           <p className="mt-[18px] text-xs">{item.Owner}</p>
//                         </div>
//                         <div className="text-center">
//                           <svg
//                             width="24"
//                             height="24"
//                             viewBox="0 0 28 28"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="mx-auto"
//                           >
//                             <path
//                               opacity="0.4"
//                               d="M23.9166 11.887H20.545C17.78 11.887 15.5283 9.63537 15.5283 6.87036V3.4987C15.5283 2.85703 15.0033 2.33203 14.3616 2.33203H9.41496C5.82163 2.33203 2.91663 4.66536 2.91663 8.83037V19.167C2.91663 23.332 5.82163 25.6654 9.41496 25.6654H18.585C22.1783 25.6654 25.0833 23.332 25.0833 19.167V13.0537C25.0833 12.412 24.5583 11.887 23.9166 11.887Z"
//                               fill="#596579"
//                             />
//                             <path
//                               opacity="0.4"
//                               d="M18.4333 2.57889C17.9549 2.10056 17.1266 2.42723 17.1266 3.09223V7.16389C17.1266 8.86723 18.5733 10.2789 20.3349 10.2789C21.4433 10.2906 22.9833 10.2906 24.3016 10.2906C24.9666 10.2906 25.3166 9.50889 24.8499 9.04223C23.1699 7.35056 20.1599 4.30556 18.4333 2.57889Z"
//                               fill="#596579"
//                             />
//                             <path
//                               d="M15.75 16.0391H8.75C8.27167 16.0391 7.875 15.6424 7.875 15.1641C7.875 14.6857 8.27167 14.2891 8.75 14.2891H15.75C16.2283 14.2891 16.625 14.6857 16.625 15.1641C16.625 15.6424 16.2283 16.0391 15.75 16.0391Z"
//                               fill="white"
//                             />
//                             <path
//                               d="M13.4167 20.707H8.75C8.27167 20.707 7.875 20.3104 7.875 19.832C7.875 19.3537 8.27167 18.957 8.75 18.957H13.4167C13.895 18.957 14.2917 19.3537 14.2917 19.832C14.2917 20.3104 13.895 20.707 13.4167 20.707Z"
//                               fill="white"
//                             />
//                           </svg>
//                           <p className="mt-[18px] text-xs">{item.First}</p>
//                         </div>
//                       </div>
//                       <div className="mt-4 block">
//                         <Link href="/details">
//                           <a className="btn btn-primary text-sm text-gray-100 w-full block">
//                             Buy Now
//                           </a>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })
//             ) : (
//               <div>
//                 <div style={{ position: "absolute", top: "40%", left: "40%" }}>
//                   <h3>No items found</h3>
//                 </div>
//               </div>
//             )
//           ) : (
//             <Loader size="Large"></Loader>
//           )}
//         </div>
//       )}
//       {!loading && carList && carList.length && (
//         <Pagination
//           onChange={changeHandler}
//           current={current}
//           pageSize={pageSize}
//           total={total}
//           style={{ width: "1000px" }}
//         ></Pagination>
//       )}
//       {layout === "list" && <div>List layout</div>}

//       <style jsx>
//         {`
//           .vehicle-list li.active {
//             background: #5065f6;
//             color: #fff;
//             border-radius: 4px 0 0 4px;
//           }
//         `}
//       </style>
//     </div>
//   );
// }
