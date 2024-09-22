import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";
import rootSaga from "./sagas";

// Tạo middleware cho saga
const sagaMiddleware = createSagaMiddleware();

// Kết hợp các reducer
const rootReducer = combineReducers({
  productState: productReducer,
  cartState: cartReducer,
});

// Tạo store và áp dụng middleware saga
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware) // Thêm middleware saga
);

// Chạy saga
sagaMiddleware.run(rootSaga);

export default store;
