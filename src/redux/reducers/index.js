import { combineReducers } from "redux";
import cartReducers from "./CartReducers";
import productsReducers from "./ProductsReducers";

const rootReducers = combineReducers({
  products: productsReducers,
  cart: cartReducers,
});

export default rootReducers;
