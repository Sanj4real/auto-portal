import axios from "axios";
import { getBearerToken, removeToken } from "src/helpers/token";

export const clientKeys = {
  client_id: "webapp",
  client_secret: "secret",
};

const axiosInstance = axios.create({
  baseURL: "https://api.ktmkart.com",
  // baseURL: "https://a.autoexperts.doransoft.com",
});

axiosInstance.interceptors.request.use((req) => {
  if (!req.headers["Authorization"]) {
    if (getBearerToken()) {
      req.headers["Authorization"] = `Bearer ${getBearerToken()}`;
    }
    req.headers["Content-type"] = "application/json";
  }
  req.headers["Content-type"] = "application/json";
  return req;
});

axiosInstance.interceptors.response.use(
  undefined,
  function axiosRetryInterceptor(err) {
    if (
      err.response.status === 401 &&
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/userDashboard/password"
    ) {
      removeToken();
      window.location.assign("/login");
    }
  }
);

export default axiosInstance;
