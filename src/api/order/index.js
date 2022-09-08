import Axios from "../axios";

export function getOrderCount() {
  return Axios.get("/orders/count");
}

export function getOrder({ limit = 10, skip = 0 }) {
  return Axios.get(`/orders?filter[limit]=${limit}&filter[skip]=${skip}`);
}

export function remove({ id }) {
  return Axios.patch(`/orders/cancel/${id}`);
}

export function getOrderHistory(id) {
  return Axios.get(`/orders/${id}`);
}
