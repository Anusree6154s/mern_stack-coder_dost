//all these call, put, takeEvery are called side effects
//it is because it runs differently from the normal flow of yield in redux-saga
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { addAsync, addAsyncFulfilled, deleteAsync, fetchAsync, fetchAsyncFulfilled, updateAsync } from './cartSlice'
import { addItem, fetchItems } from './cartAPI'

//template function generator
//this is for USER_FETCH_SUCCEEDED actions
/* function* fetchuser(action){
    const user = yield call(Api.fetchUser, argument(eg:action.payload.userId))
    yield put({type:'USER_FETCH_SUCCEEDED', user:user})
}*/

//function generator in our case
function* getCartItems(action) {
    //acll response will an api response as usual
    const response = yield call(fetchItems)
    //put is like dispatch
    yield put({ type: fetchAsyncFulfilled.toString(), payload: response.data })
}


function* addCartItem(action) {
    const newItem = { ...action.payload, quantity: 1 }
    const response = yield call(addItem, newItem)
    yield put({ type: addAsyncFulfilled.toString(), payload: response.data })
}

function* watchGetItem() {
    //to get the string passed in fetchAsync, i.e,'cart/fetchItem/pending', we use toString
    // unlike redux toolkit, redux saga doesnt read it automatically
    //action made in action creators in cartSlice.js is caught here in takeEvery function and passed to getCartItems function as argument
    yield takeEvery(fetchAsync.toString(), getCartItems)
}

function* watchAddItem() {
    yield takeEvery(addAsync.toString(), addCartItem)
}

export function* mySaga() {
    yield all([
        watchGetItem(),
        watchAddItem()
    ])
}