import actionStyles from "../styles";

export const addToCart = (payload) => {
  return {
    type: actionStyles.ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = (payload) => {
  return {
    type: actionStyles.REMOVE_FROM_CART,
    payload,
  };
};

export const upQuantity = (payload) => {
  return {
    type: actionStyles.UP_QUANTITY,
    payload,
  };
};

export const downQuantity = (payload) => {
  return {
    type: actionStyles.DOWN_QUANTITY,
    payload,
  };
};
