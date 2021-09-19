import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purshaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type:actionTypes.PURCHASE_BURGER_FAILED,
        error:error
    };
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START,
    };
};

export const purchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json?auth='+ token,orderData).then(
            response => {
                dispatch(purshaseBurgerSuccess(response.data.id,orderData));
            }
        ).catch(
            error => {
                dispatch(purchaseBurgerFail(error));
            }
        );
    };
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};

export const fetchOrdersSuccess = (orders) => {
    return{
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders:orders
    };
};

export const fetchOrdersFailed = (error) => {
    return {
        type:actionTypes.FETCH_ORDERS_FAILED,
        error:error
    };
};

export const fetchOrderStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrderStart());
        const queryParams = '?auth='+ token + '&orderBy="userId"&equalTo="'+userId+'"';
        axios.get('/orders.json'+queryParams)
        .then(response => {
            const fetchedOrders = [];
            for(let key in response.data) {
                fetchedOrders.push({
                    ...response.data[key],
                    id: key
                });
            }
            dispatch(fetchOrdersSuccess(fetchedOrders));
        }).catch(err=>{
            dispatch(fetchOrdersFailed(err));
        })
    }
}