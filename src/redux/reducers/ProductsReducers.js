import actionStyles from "../styles";

const initialState = {
  products: [],
};

const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionStyles.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducers;
