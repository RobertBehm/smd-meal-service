export const cartReducer = (
  state = { cartItems: [], situation: "ADD_ONE_OR_MORE", shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alreadyExists = state.cartItems.find(
        (item) => item._id === action.payload.cartItem._id
      );

      if (alreadyExists) {
        if (action.payload.situation == "ADD_ONE_OR_MORE") {
          var thatItemWithSameSize = state.cartItems.find(
            (item) =>
              item._id == action.payload.cartItem._id &&
              item.size == action.payload.cartItem.size
          );
          var thatItemWithDiffSize = state.cartItems.find(
            (item) =>
              item._id == action.payload.cartItem._id &&
              item.size != action.payload.cartItem.size
          );

          if (thatItemWithSameSize && !thatItemWithDiffSize) {
            thatItemWithSameSize = {
              ...thatItemWithSameSize,
              quantity:
                thatItemWithSameSize.quantity +
                action.payload.cartItem.quantity,
            };

            return {
              ...state,
              cartItems: [
                ...state.cartItems.filter(
                  (item) => item._id != action.payload.cartItem._id
                ),
                thatItemWithSameSize,
              ],
            };
          } else if (!thatItemWithSameSize && thatItemWithDiffSize) {
            return {
              ...state,
              cartItems: [...state.cartItems, action.payload.cartItem],
            };
          } else if (thatItemWithSameSize && thatItemWithDiffSize) {
            thatItemWithSameSize = {
              ...thatItemWithSameSize,
              quantity:
                thatItemWithSameSize.quantity +
                action.payload.cartItem.quantity,
            };

            return {
              ...state,
              cartItems: [
                ...state.cartItems.filter(
                  (item) => item._id != action.payload.cartItem._id
                ),
                thatItemWithSameSize,
                thatItemWithDiffSize,
              ],
            };
          }
        } else if (
          action.payload.situation == "ADD_ONE" ||
          action.payload.situation == "SUB_ONE"
        ) {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item._id === action.payload.cartItem._id &&
              item.size === action.payload.cartItem.size
                ? action.payload.cartItem
                : item
            ),
          };
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload.cartItem],
        };
      }
    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) =>
            item._id !== action.payload._id ||
            (item._id == action.payload._id && item.size != action.payload.size)
        ),
      };
    case "EMPTY_CART":
      return {
        ...state,
        cartItems: [],
      };

    case "CART_SAVE_SHIPPING_ADDRESS":
      return {
        ...state,
        shippingAddress: action.payload,
      };

    default:
      return state;
  }
};
