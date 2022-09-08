import React from "react";
import { Pagination } from "antd";
import { useRouter } from "next/router";

export default function PAGINATION({ count, setPage, setPerpage, page }) {
  const router = useRouter();

  const handlePage = (page, pageSize) => {
    setPage(page);
    setPerpage(pageSize);
  };

  return (
    <Pagination
      defaultCurrent={1}
      total={count}
      page={page}
      onChange={handlePage}
      className="mt-6 mb-5"
      showSizeChanger
    />
  );
}
