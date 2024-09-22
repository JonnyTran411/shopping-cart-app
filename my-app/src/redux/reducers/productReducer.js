import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  SELECT_PRODUCT,
} from "../actions/productActions";

// Define the initial state of the reducer
const initialState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
};

// Define the reducer function
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null, // Xóa lỗi trước khi bắt đầu request mới
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload, // Lưu lỗi khi xảy ra
      };
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
