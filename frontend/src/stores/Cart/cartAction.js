import axios from 'axios'
import { ADD_TO_CART, DECREASE_QTY, INCREASE_QTY, REMOVE_ITEM } from './cartType'
import swal from 'sweetalert'

export const cartAction = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data
    }
}
export const increaseQtyAction = (data) => {
    return {
        type: INCREASE_QTY,
        payload: data
    }
}
export const decreaseQtyAction = (data) => {
    return {
        type: DECREASE_QTY,
        payload: data
    }
}
export const removeItem = (data) => {
    return {
        type: REMOVE_ITEM,
        payload: data
    }
}

export const placeOrder = (data) => {
    return () => {
        axios
            .post('/postOrder', data)
            .then(async res => {
                console.log(res);
                await swal(res.data.message, "", "success")
                window.location = "/"
            })
            .catch(async err => {
                console.log(err);
            })
    }
}
