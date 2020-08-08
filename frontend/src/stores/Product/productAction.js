import axios from 'axios'
import { PRODUCTS } from './productType'

export const productAction = (data) => {
    return {
        type: PRODUCTS,
        payload: data
    }
}

export const fetchProduct = () => {
    return (dispatch) => {
        axios
            .get('/product')
            .then(res => {
                const { data: { data } } = res
                dispatch(productAction(data))
            })
            .catch(async err => {
                console.log(err);
            })
    }
}