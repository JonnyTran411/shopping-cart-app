import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

export default combineReducers({
  productState: productReducer,
  cartReducer: cartReducer,
});
