// filter
const sortBys = [
  {
    name: "Default",
    value: JSON.stringify({}),
  },
  {
    name: "Price High to Low",
    value: JSON.stringify({
      sort: "price",
      dir: "desc",
    }),
  },
  {
    name: "Price Low to High",
    value: JSON.stringify({
      sort: "price",
      dir: "asc",
    }),
  },
  {
    name: "Latest",
    value: JSON.stringify({
      sort: "createdAt",
      dir: "desc",
    }),
  },
  {
    name: "Oldest",
    value: JSON.stringify({
      sort: "createdAt",
      dir: "asc",
    }),
  },
];

export default sortBys;
