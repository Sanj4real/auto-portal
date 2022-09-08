import Axios from "../axios";
import axios from "axios";

export function getBanner() {
  return Axios.get("/banners");
}
// category
export function getCategory() {
  return Axios.get("/categories");
}
// categoryById
export function getCategoryById(id) {
  return Axios.get(`/categories/childrens/${id}`);
}

// listPageCategory
export function getCategoryByIdList({ id, limit = 10, skip = 0 }) {
  return Axios.get(
    `/products?filter[where][category_id]=${id}&filter[limit]=${limit}&filter[skip]=${skip}`
  );
}
// listDetailsProduct
export function getCategoryDetails(id) {
  console.log(id);
  // return Axios.get(`/productDetails/${id}?filter`);
  return Axios.get(`/products/${id}`);
}

// getBrandsByID
export function getBrandByIdList({ id, limit = 10, skip = 0 }) {
  return Axios.get(
    `/products?filter[where][brand_id]=${id}&filter[limit]=${limit}&filter[skip]=${skip}`
  );
}

// testimonial
export function getTestimonial() {
  return Axios.get(`/product-review?filter=`);
}

// listSearchApi
export function getSearchCategoryApi(searchValue, limit = 10, offset = 1) {
  return Axios.get(
    `/frontend/category/search?q=${searchValue}&limit=${limit}&offset=${offset}`
  );
}

export const getSearchCategoryApiAll = (searchValue) => {
  return Axios.get(`/frontend/category/search?q=${searchValue}`);
};

// brands
export function getBrands() {
  return Axios.get("/brands");
}
