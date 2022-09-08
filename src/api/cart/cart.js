import Axios from "../axios";

const count = () => {
  return Axios.get("/carts/count");
};

const add = ({ productSlug, productVariantSku, quantity = 1 }) => {
  return Axios.post("/v1/carts/add", {
    productSlug,
    productVariantSku,
    quantity,
  });
};

const remove = ({ id }) => {
  return Axios.delete(`/v1/carts/items?id=${id}`);
};

const carts = () => {
  return Axios.get(`/v1/carts`);
};

export const cartApi = {
  count,
  add,
  remove,
  carts,
};
