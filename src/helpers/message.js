import { message } from "antd";

function success(content, duration, onClose) {
    return message.success(content, duration, onClose)
}   

function error(content, duration, onClose) {
    return message.error(content, duration, onClose)
}  

function info(content, duration, onClose) {
    return message.info(content, duration, onClose)
}  

function warning(content, duration, onClose) {
    return message.warning(content, duration, onClose)
}  

function warn(content, duration, onClose) {
    return message.warn(content, duration, onClose)
}  

function loading(content, duration, onClose) {
    return message.loading(content, duration, onClose)
}  

export const messages = {
        success,
        error,
        info,
        warning,
        warn,
        loading
}



