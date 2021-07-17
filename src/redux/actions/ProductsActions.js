import axios from "axios";
import actionStyles from "../styles";

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products`);
    dispatch({
      type: actionStyles.FETCH_PRODUCTS,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};
