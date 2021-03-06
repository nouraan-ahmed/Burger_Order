import * as actionTypes from './actionTypes';

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
    return {
        type:actionTypes.PURCHASE_BURGER,
        orderData:orderData,
        token:token
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
    return {
        type: actionTypes.FETCH_ORDERS,
        token:token,
        userId:userId
    }
}