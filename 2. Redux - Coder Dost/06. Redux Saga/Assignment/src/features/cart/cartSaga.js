//all these call, put, takeEvery are called side effects
//it is because it runs differently from the normal flow of yield in redux-saga
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { addAsync, addAsyncFulfilled, deleteAsync, deleteAsyncFulfilled, fetchAsync, fetchAsyncFulfilled, updateAsync, updateAsyncFulfilled } from './cartSlice'
import { addItem, deleteItem, fetchItems, updateItem } from './cartAPI'

//template function generator
//this is for USER_FETCH_SUCCEEDED actions
/* function* fetchuser(action){
    const user = yield call(Api.fetchUser, argument(eg:action.payload.userId))
    yield put({type:'USER_FETCH_SUCCEEDED', user:user})
}*/

//function generator in our case
function* getCartItems() {
    //acll response will an api response as thunk
    const response = yield call(fetchItems)
    //put is like dispatch
    yield put({ type: fetchAsyncFulfilled.toString(), payload: response.data })
}


function* addCartItem(action) {
    const newItem = { ...action.payload, quantity: 1 }
    const response = yield call(addItem, newItem)
    yield put({ type: addAsyncFulfilled.toString(), payload: response.data })
}

function* updateCartItem(action) {
    const response = yield call(updateItem, action.payload.id, action.payload.itemQuantity)
    yield put({ type: updateAsyncFulfilled.toString(), payload: response.data })
}

function* deleteCartItem(action) {
    yield call(deleteItem, action.payload)
    yield put({ type: deleteAsyncFulfilled.toString(), payload: action.payload })
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

function* watchUpdateItem() {
    yield takeEvery(updateAsync.toString(), updateCartItem)
}

function* watchDeleteItem() {
    yield takeEvery(deleteAsync.toString(), deleteCartItem)
}

export function* mySaga() {
    yield all([
        watchGetItem(),
        watchAddItem(),
        watchUpdateItem(),
        watchDeleteItem()
    ])
}