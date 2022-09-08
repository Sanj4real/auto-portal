import Axios from "../axios";

const get = ({ pageNumber, pageSize }) => {
    return Axios.get(`/products?pageNumber=${pageNumber}&pageSize=${pageSize}`)
}

const getVehicle = (id) => {
    console.log("id is>>>>>>>>>>>>>>.>>", id)
    return Axios.get(`/products/${id}`)
}

const count = () => {
    return Axios.get(`/products/count?filter[where][name]=su`)
}

export const vehiclesApi = {
    get,
    getVehicle,
    count
}