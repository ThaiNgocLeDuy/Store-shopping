import actionStyles from "../styles";

const initialState = {
  cart: [],
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionStyles.ADD_TO_CART:
      const inCart = state.cart.find((x) =>
        x.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...action.payload, qty: 1 }],
      };
    case actionStyles.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionStyles.UP_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty + 1 }
            : item
        ),
      };
    case actionStyles.DOWN_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                qty: action.payload.qty !== 1 ? action.payload.qty - 1 : 1,
              }
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducers;
