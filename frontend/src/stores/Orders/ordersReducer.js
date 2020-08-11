const { FETCH_ORDERS } = require("./ordersType");

const orderReducer = (state = [], action) => {

    switch (action.type) {
        case FETCH_ORDERS:
            return [action.payload]

        default: return state;

    }
}

export default orderReducer;