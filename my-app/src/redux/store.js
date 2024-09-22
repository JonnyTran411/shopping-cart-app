import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas"; // Import rootSaga

// Tạo middleware cho saga
const sagaMiddleware = createSagaMiddleware();

// Tạo store và áp dụng middleware saga
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware) // Thêm middleware saga
);

// Chạy saga
sagaMiddleware.run(rootSaga);

export default store;
