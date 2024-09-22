import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  FETCH_PRODUCTS_REQUEST,
  fetchProductsFailure,
  fetchProductsSuccess,
} from "../actions/productActions";

// Worker saga: gọi API và dispatch action với kết quả
function* fetchProducts() {
  try {
    const response = yield call(
      axios.get,
      "http://weblearn.ddns.net:4000/api/products"
    ); // Gọi API
    yield put(fetchProductsSuccess(response.data)); // Dispatch action FETCH_PRODUCTS với dữ liệu từ API
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

// Watcher saga: lắng nghe action FETCH_PRODUCTS_REQUEST và gọi worker saga fetchProducts
function* watchFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProducts);
}

// Root saga: kết hợp tất cả các sagas
export default function* rootSaga() {
  yield watchFetchProducts();
}
