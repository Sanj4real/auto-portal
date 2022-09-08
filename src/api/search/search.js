import Axios from "../axios";
import axios from "axios";

export const searchApi = (searchValue, limit = 10, offset = 1) => {
  console.log("hello", searchValue);
  return Axios.get(
    `/product/search?q=${searchValue}&limit=${limit}&offset=${offset}`
  );
  //  return axios.get(`https://a.autoexperts.doransoft.com/product/search?q=${searchValue}`)
};

export const searchApiAll = (searchValue) => {
  return Axios.get(`/product/search?q=${searchValue}`);
  //  return axios.get(`https://a.autoexperts.doransoft.com/product/search?q=${searchValue}`)
};
