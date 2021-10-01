import { delay } from 'redux-saga/effects';
import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* logoutSaga(action){
    yield call([localStorage, 'removeItem'], 'token');
    yield call([localStorage, 'removeItem'], 'expirationDate');
    yield call([localStorage, 'removeItem'], 'userId');
    yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action){
    yield delay(action.expirationTime*1000);
    yield put(actions.logout());
}

export function* authUserSaga(action){
    yield put(actions.authStart());
    const authData = {
        email:action.email,
        password: action.pass,
        returnSecureToken: true
    }

    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBnzGJ0k4-Ehpl_n13apa7U-HpjtxauAYc';
    if(!action.isSignup){
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBnzGJ0k4-Ehpl_n13apa7U-HpjtxauAYc'
    }
    try{
    const res = yield axios.post(url,authData)

    const expirationDate = yield new Date(new Date().getTime() + res.data.expiresIn * 1000);
    
    yield localStorage.setItem('token',res.data.idToken);
    yield localStorage.setItem('expirationDate',expirationDate);
    yield localStorage.setItem('userId',res.data.localId);
    yield put(actions.authSuccess(res.data.idToken,res.data.localId));
    yield put(actions.checkAuthTimeout(res.data.expiresIn));
    } catch(err){
        yield put(actions.authFailed(err.response.data.error));
    }

}

export function* authCheckStateSaga(action){
    const token = yield localStorage.getItem('token');
        if(!token){
            yield put(actions.logout());
        }else{
            const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date()){
                yield put(actions.logout());
            }else{
                const userId = yield localStorage.getItem('userId');
                yield put(actions.authSuccess(token,userId));
                yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime())/1000));
            }
        }
}