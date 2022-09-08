import Axios, { clientKeys } from "../axios";
// import axios from "axios";



export function customerAuthLogin({ username, password }) {
  // const url = `https://api.ktmkart.com/auth/customer-login`;
  const url = `${process.env.API_BASE_URL}/auth/customer-login`;
  return Axios.post("/auth/customer-login", {
    username,
    password,
    ...clientKeys,
  })
}

export function customerRegisterOTP({ phone }) {

  return Axios.post("register/sendotp", {
    phone,
    code: "OTP_CONFIRMATION"
  })
}

export function customerRegister(data) {
  return Axios.post("register/customer", data)
}


export function getTokenApi({ code, username }) {
  return Axios.post('/auth/token', {
    clientId: clientKeys.client_id,
    code,
    username
    // const url = `https://api.ktmkart.com/auth/token`;

  })
}

export const changePassword = (values) => {
  return Axios.patch("/change-password", values);
}

export const forgetPassword = (email) =>{
  return Axios.post("/reset-password/sendotp", {phone: email});
}

export const resetPassword = (phone) => {
  return Axios.post('./reset-password/phone', {phone})
}

export function logoutApi() {
  return Axios.post('/logout')
}

// confirmPassword: "1234"
// otpKey: "4898949"
// password: "1234"
// phone: "9846863789"


