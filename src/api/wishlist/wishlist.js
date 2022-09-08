import Axios from "../axios";

const count = () => {
  return Axios.get("/wishlists/count");
};
const wishlists = () => {
  return Axios.get("/wishlists");
};

const remove = ({ id }) => {
  return Axios.delete(`wishlists?id=${id}`);
};

const add = ({ productSlug, productVariantSku, quantity = 1 }) => {
  return Axios.post(`wishlists`, { productSlug, productVariantSku, quantity });
};

export const wishListApi = {
  count,
  wishlists,
  remove,
  add,
};
