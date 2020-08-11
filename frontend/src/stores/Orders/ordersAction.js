import { FETCH_ORDERS } from "./ordersType"
import axios from "axios"

export const ordersAction = (data) => {
    return {
        type: FETCH_ORDERS,
        payload: data
    }
}

export const fetchOrder = () => {
    return (dispatch) => {
        axios
            .get('/fetchOrder')
            .then(res => {
                dispatch(ordersAction(res.data.data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const fetchOrderById = (id) => {
    return (dispatch) => {
        axios
            .get('/fetchOrderById/' + id)
            .then(res => {
                dispatch(ordersAction(res.data.data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}