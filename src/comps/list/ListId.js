import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import HEAD from "src/helpers/head";
import BreadCrumb from "src/helpers/breadcrumb";
// useQuery
import { useMutation, useQueryClient } from "react-query";
import { Row, Col, Collapse, Radio, Pagination, Select, message } from "antd";
// icons
import { BsListCheck, BsFillGridFill } from "react-icons/bs";
// getList
import { Data } from "./Data";
import sortBys from "./SortBy";
import SortBy from "../sortBy/SortBy";
// api
import { getBrandByIdList, getCategoryByIdList } from "../../api/homepage";
import { wishListApi } from "src/api/wishlist/wishlist";

export default function ListId() {
  const { Panel } = Collapse;
  const router = useRouter();
  const [CategoryId, setCategoryId] = useState([]);

  // pagination
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({
    limit: 10,
    skip: 0,
  });

  const [OrderCount, setOrderCount] = useState(0);

  // getapi
  useEffect(() => {
    router?.query?.id &&
      getCategoryByIdList({
        id: router?.query?.id,
        limit: pagination.limit,
        skip: pagination.skip,
      }).then((res) => {
        setCategoryId(res?.data);
        setOrderCount(res?.data?.totalCount);
      });
    // brands
    router?.query?.brandId &&
      getBrandByIdList({
        id: router?.query?.brandId,
        limit: pagination.limit,
        skip: pagination.skip,
      }).then((res) => {
        setCategoryId(res?.data);
        setOrderCount(res?.data?.totalCount);
      });
  }, [router?.query, pagination]);
  // pagination
  const changePage = (current, size) => {
    if (!current) {
      current = page;
    }
    setPagination({
      limit: size,
      skip: (current - 1) * size,
    });
  };

  // wishListAdd
  const queryClient = useQueryClient();
  const wishAddMutate = useMutation(
    async ({ productSlug, productVariantSku }) => {
      return await wishListApi
        .add({ productSlug, productVariantSku })
        .then(() => {
          message.success("Product added to wishlist successfully!");
          queryClient.invalidateQueries("wishList");
          queryClient.invalidateQueries("wishListCount");
        });
    }
  );

  // dropDownFilter
  const { Option } = Select;
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  // grid
  const [layout, setLayout] = useState("grid");
  const handleLayoutChange = (layout) => setLayout(layout);
  // sidebar
  const [value, setValue] = useState([]);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  // sort
  const [query, setQuery] = useState();
  const handleSortByChange = (e) => {
    if (e === "salePriceLow") {
      setQuery({
        ...query,
        salesOrder: "%20ASC",
      });
    } else if (e === "salePriceHigh") {
      setQuery({
        ...query,
        salesOrder: "%20DESC",
      });
    }
  };

  return (
    <>
      <HEAD
        title={CategoryId?.name}
        desc={CategoryId?.description}
        img={CategoryId?.images}
      />
      <div className="container">
        <BreadCrumb component={CategoryId?.name || ""} />
        <Row gutter={22}>
          <Col sm={24} md={8} lg={7} xl={6}>
            <div className="bg-bgGround py-6 px-3 my-2 sticky top-32 rounded-lg sidebar">
              <div className="block md:flex items-center justify-between mb-3">
                <h4 className="text-base font-light">Filter</h4>
                <h5>
                  <Link href="#!">
                    <a className="text-base font-medium text-hoverColor hover:underline hover:text-hoverbgColor">
                      Reset All
                    </a>
                  </Link>
                </h5>
              </div>
              <div className="mb-3">
                <Collapse
                  defaultActiveKey={["1"]}
                  className="border-0 p-0 bg-transparent"
                  expandIconPosition="right"
                >
                  {(Array.isArray(CategoryId?.variants)
                    ? CategoryId?.variants
                    : []
                  ).map((item, index) => {
                    return (
                      <Panel
                        header={item?.name}
                        className="text-base font-medium mb-2 p-0 bg-transparent"
                        key={index}
                      >
                        <Radio.Group
                          value={item?.name}
                          onChange={onChange}
                          className={`radioOverflow bg-bgGround  overflow-y-auto max-h-36  `}
                        >
                          {(Array.isArray(item?.variant_option)
                            ? item?.variant_option
                            : []
                          ).map((data, index) => {
                            return (
                              <Radio key={index} value={data?.id} class="block">
                                {data?.name}
                              </Radio>
                            );
                          })}
                        </Radio.Group>
                      </Panel>
                    );
                  })}
                </Collapse>
              </div>
            </div>
          </Col>
          <Col sm={24} md={16} lg={17} xl={18}>
            <div className="flex mb-4 pb-2 border-b border-b-bgGround justify-between items-center">
              <h4 className="text-lg font-medium capitalize">
                {CategoryId?.name}
              </h4>
              <SortBy onChange={handleSortByChange} items={sortBys} />
              <div>
                <ul className="flex vehicle-list">
                  <li
                    className={`p-3${
                      layout === "grid" ? " active bg-bgGround" : ""
                    }`}
                    onClick={() => handleLayoutChange("grid")}
                  >
                    <BsFillGridFill />
                  </li>
                  <li
                    className={`p-3${
                      layout === "list" ? " active bg-bgGround" : ""
                    }`}
                    onClick={() => handleLayoutChange("list")}
                  >
                    <BsListCheck />
                  </li>
                </ul>
              </div>
            </div>

            {layout === "grid" && (
              <Row gutter={15}>
                {(Array.isArray(CategoryId?.products)
                  ? CategoryId?.products
                  : []
                ).map((item, index) => {
                  return (
                    <Col span={8} key={index}>
                      <Data.GridData {...item} />
                    </Col>
                  );
                })}
                <div className="block w-full">
                  <Pagination
                    total={OrderCount}
                    showSizeChanger
                    onShowSizeChange={changePage}
                    onChange={changePage}
                    defaultCurrent={1}
                    className="custom-select mb-4"
                  />
                </div>
              </Row>
            )}
            {layout === "list" && (
              <Row gutter={22}>
                {(Array.isArray(CategoryId?.products)
                  ? CategoryId?.products
                  : []
                ).map((item, index) => {
                  return (
                    <Col span={24} key={index}>
                      <Data.ListData {...item} />
                    </Col>
                  );
                })}
                <div className="block w-full">
                  <Pagination
                    total={OrderCount}
                    showSizeChanger
                    onShowSizeChange={changePage}
                    onChange={changePage}
                    defaultCurrent={1}
                    className="custom-select mb-4"
                  />
                </div>
              </Row>
            )}
          </Col>
        </Row>
        <style jsx>
          {`
            :global(.ant-collapse-header) {
              padding: 0 !important;
            }
            :global(.ant-collapse-content-box) {
              padding: 0 !important;
            }
            :global(.ant-collapse, .ant-collapse-content) {
              background: transparent !important;
              border: 0;
            }
            :global(.ant-collapse > .ant-collapse-item) {
              margin: 0 !important;
              background: transparent !important;
            }
            :global(.ant-radio-group) {
              display: block;
            }
            :global(.ant-radio-group label) {
              display: block !important;
            }
            :global(.ant-checkbox-group) {
              display: block;
            }
            :global(.ant-checkbox-group label) {
              display: flex !important;
            }
            :global(.ant-collapse-content) {
              border: 0 !important;
            }
            :global(.ant-collapse > .ant-collapse-item > .ant-collapse-header) {
              background: transparent;
            }
            .radioOverflow::-webkit-scrollbar {
              width: 5px;
            }
            :global(.custom-select .ant-select-selector) {
              padding: 0 12px 0 0 !important;
              border-radius: 4px !important;
              height: auto !important;
              line-height: normal !important;
            }
            :global(.custom-pagination .ant-select-selector) {
              padding: 0 12px 0 0 !important;
              border-radius: 4px !important;
              height: auto !important;
              line-height: normal !important;
            }
          `}
        </style>
      </div>
    </>
  );
}
