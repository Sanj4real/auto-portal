import Axios from "../axios";

export function getReview() {
  return Axios.get("/product-review/me");
}
export function getReviewList() {
  return Axios.get("/product-review");
}
