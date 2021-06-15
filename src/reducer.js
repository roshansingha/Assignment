export const initialState = {
  cart: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_CART":
      //logic to add
      return { ...state, cart: [...state.cart, action.item] };
    case "REMOVE_FROM_CART":
      //logic to remove
      let newCart = [...state.cart];
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it is not in the cart.`
        );
      }
      return { ...state, cart: newCart };
    default:
      return state;
  }
};

export default reducer;
