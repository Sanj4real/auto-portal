// import { useEffect, useState } from "react";
// import { Row, Col, Checkbox, Collapse, Radio } from "antd";
// import Link from "next/link";
// import ListItems from "./ListItems";
// import Buysell from "../buy-sell";
// import Suggestion from "../suggestion";
// import { vehiclesApi } from "src/api/vehicle/vehicle";
// import { useRouter } from "next/router";

// // reactQuery
// import { useQuery, QueryClient } from "react-query";
// import { getCategoryById } from "src/api/homepage";

// export default function List({}) {
//   const router = useRouter();
//   const [CategoryId, setCategoryId] = useState([]);

//   useEffect(() => {
//     router.query?.id &&
//       getCategoryById(router.query?.id).then((res) => {
//         setCategoryId(res?.data);
//       });
//   }, [router.query]);

//   useEffect(() => {
//     console.log(CategoryId);
//   }, [CategoryId]);

//   function getVehicles(pageNumber, pageSize) {
//     return vehiclesApi.get({ pageNumber, pageSize });
//   }
//   const [searchKey, setSearchKey] = useState();

//   useEffect(() => {
//     setSearchKey(router.query.searchkey);
//   }, [router.query.searchkey]);

//   const CHECKBOX = [
//     {
//       label: "Used",
//       value: "Used",
//     },
//     {
//       label: "New",
//       value: "New",
//     },
//   ];

//   // pannel
//   const { Panel } = Collapse;

//   //   Radio Catagories
//   const CATEGORYLIST = [
//     {
//       title: "All Cars",
//       value: "all-cars",
//     },
//     {
//       title: "Bikes",
//       value: "bikes",
//     },
//     {
//       title: "Taxi",
//       value: "taxt",
//     },
//     {
//       title: "Bus",
//       value: "bus",
//     },
//   ];

//   const [catValue, setCatValue] = useState("all-cars");

//   const handleCategoryChange = (value) => setCatValue(value);

//   const ListData = { id, price };

//   //   cars List
//   const CARSLIST =
//     (CategoryId &&
//       CategoryId.length &&
//       CategoryId.map((item, index) => {
//         return {
//           src:
//             item.images && item?.images[0]?.url
//               ? `https://api.ktmkart.com${item?.images[0]?.url}`
//               : "/images/noimage.png",
//           price: item.salePrice,
//           past: "26000",
//           title: item.name,
//           Distance: "1400km",
//           Location: "Kathmandu",
//           Owner: item?.tenant?.name,
//           First: "Last Owner",
//           id: item?.index,
//         };
//       })) ||
//     [];

//   return (
//     <div>
//       <div className="mt-[87px] mb-[158px]">
//         <div className="container">
//           <Row gutter={20}>
//             <Col span={6}>
//               <div className="py-5 px-4 rounded-lg sidebar">
//                 <div className="flex items-center justify-between mb-4">
//                   <h4 className="text-base text-[#7B8698]">Filter</h4>
//                   <h5>
//                     <Link href="#!">
//                       <a className="text-mbase text-[#144FFF]">Reset All</a>
//                     </Link>
//                   </h5>
//                 </div>
//                 <div className="mb-[30px]">
//                   <h4 className="text-lg text-gray-800 font-normal mb-6">
//                     Condition
//                   </h4>
//                   <div>
//                     <Checkbox.Group options={CHECKBOX} />
//                   </div>
//                 </div>
//                 <div className="mb-[30px]">
//                   <Collapse
//                     defaultActiveKey={["1"]}
//                     className="border-0"
//                     expandIconPosition="right"
//                   >
//                     <Panel
//                       header="Category"
//                       key="1"
//                       className="text-lg text-gray-800 font-normal mb-4"
//                     >
//                       <Radio.Group
//                         value={catValue}
//                         onChange={handleCategoryChange}
//                       >
//                         {CATEGORYLIST.map((item, index) => (
//                           <Radio key={index} value={item.value} class="block">
//                             {item.title}
//                           </Radio>
//                         ))}
//                       </Radio.Group>
//                     </Panel>
//                     <Panel
//                       header="Location"
//                       className="text-lg text-gray-800 font-normal mb-4"
//                       key="2"
//                     >
//                       <Radio.Group
//                         value={catValue}
//                         onChange={handleCategoryChange}
//                       >
//                         {CATEGORYLIST.map((item, index) => (
//                           <Radio key={index} value={item.value} class="block">
//                             {item.title}
//                           </Radio>
//                         ))}
//                       </Radio.Group>
//                     </Panel>
//                     <Panel
//                       header="Make and Modal"
//                       className="text-lg text-gray-800 font-normal mb-4"
//                       key="3"
//                     >
//                       <Radio.Group
//                         value={catValue}
//                         onChange={handleCategoryChange}
//                       >
//                         {CATEGORYLIST.map((item, index) => (
//                           <Radio key={index} value={item.value} class="block">
//                             {item.title}
//                           </Radio>
//                         ))}
//                       </Radio.Group>
//                     </Panel>
//                   </Collapse>
//                 </div>
//               </div>
//             </Col>
//             <Col span={18}>
//               <ListItems
//                 setAllVehicles={setAllVehicles}
//                 getvehicles={getVehicles}
//                 searchKey={searchKey}
//                 carList={CARSLIST}
//                 CategoryId={CategoryId}
//               />
//             </Col>
//           </Row>
//         </div>
//       </div>
//       <div className="mb-[100px]">
//         <Buysell />
//       </div>
//       <div className="mb-[120px]">
//         <Suggestion />
//       </div>

//       <style jsx>
//         {`
//           .sidebar {
//             box-shadow: 0px 4px 32px -4px rgba(56, 71, 95, 0.2);
//           }
//           :global(.ant-collapse-header) {
//             padding: 0 !important;
//             background: #fff !important;
//           }
//           :global(.ant-collapse-content) {
//             border: 0;
//           }
//           :global(.ant-collapse-content .ant-collapse-content-box) {
//             padding: 0;
//             padding-top: 20px;
//           }
//           :global(.ant-collapse-content
//               .ant-collapse-content-box
//               .ant-radio-wrapper) {
//             display: block;
//             margin-bottom: 8px;
//           }
//         `}
//       </style>
//     </div>
//   );
// }
