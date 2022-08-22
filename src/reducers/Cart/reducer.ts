import { CartState } from "../../@types/Cart";
import { CartActionTypes } from "./actions";
import { v4 as uuidv4 } from 'uuid';
import { produce } from 'immer';

export function CartReducer(state: CartState, action: any) {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        draft.items.push(action.payload);
      });
    case CartActionTypes.REMOVE_FROM_CART:
      return {
        id: state.id,
        items: [...state.items.filter(item => item.operation_id !== action.payload.operation_id)]
      };
    case CartActionTypes.EMPTY_CART:
      return {
        id: state.id,
        items: []
      };
    default:
      return state;
  }
}