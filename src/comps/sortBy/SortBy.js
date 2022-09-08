import { Select } from "antd";

const { Option } = Select;
export default function SortBy({ items, ...props }) {
  return (
    <div className="flex space-x-3 ml-auto custom-select items-center mr-5 text-sm text-gray-500">
      <label htmlFor="sort_by">Sort By:</label>
      <Select
        defaultValue={items[0].value}
        {...props}
        style={{
          width: "auto",
          borderRadius: "0px !important",
        }}
      >
        {items?.map((item, index) => (
          <Option key={index} value={item?.value}>
            {item?.name}
          </Option>
        ))}
      </Select>
      <style jsx>
        {`
          :global(.ant-select) {
            width: 13rem !important;
          }
        `}
      </style>
    </div>
  );
}
