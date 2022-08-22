import { SelectedItem } from "../../@types/Operation";
import { CartReducer } from "./reducer";

export enum CartActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  EMPTY_CART = "EMPTY_CART"
}

export interface AddToCartAction {
  type: CartActionTypes.ADD_TO_CART;
  payload: SelectedItem;
}

export interface RemoveFromCartAction {
  type: CartActionTypes.REMOVE_FROM_CART;
  payload: number;
}

export interface EmptyCartAction {
  type: CartActionTypes.EMPTY_CART;
}

export type CartAction = AddToCartAction | RemoveFromCartAction | EmptyCartAction;

export const addToCart = (operation: SelectedItem): AddToCartAction => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: operation
});

export const removeFromCart = (id: number): RemoveFromCartAction => ({
  type: CartActionTypes.REMOVE_FROM_CART,
  payload: id
});

export const emptyCart = (): EmptyCartAction => ({
  type: CartActionTypes.EMPTY_CART
});