import { messages } from "./message";

export default function errorHandler(err) {
    console.log("err is >>>", { err })
    let errMessage = "Something went wrong";
    console.log(err)
    if (err?.response) {
        errMessage = err?.response?.data?.error?.message || errMessage
        // console.log("errmessage is >>",errMessage)
    }
    messages.error(errMessage)
}